import { Router } from 'express';
import multer from 'multer';

import CreateUserService from '../services/CreateUserService';
import UploadUserAvatarService from '../services/UploadUserAvatarService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/Upload';

const userRouter = Router();
const upload = multer(uploadConfig);

userRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({ name, email, password });

  delete user.password;

  return response.json(user);
});

userRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const uploadUserAvatar = new UploadUserAvatarService();

    const user = await uploadUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(user);
  },
);

export default userRouter;