import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UploadUserAvatarService from '@modules/users/services/UploadUserAvatarService';

export default class UsersController {
  public async update(request: Request, response: Response): Promise<Response> {
    const uploadUserAvatar = container.resolve(UploadUserAvatarService);

    const user = await uploadUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    return response.json(user);
  }
}
