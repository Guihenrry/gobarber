import AppError from '@shared/errors/AppError';
import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import UploadUserAvatarService from './UploadUserAvatarService';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

let fakeStorageProvider: FakeStorageProvider;
let fakeUsersRepository: FakeUsersRepository;
let uploadUserAvatar: UploadUserAvatarService;

describe('UploadUser', () => {
  beforeEach(() => {
    fakeStorageProvider = new FakeStorageProvider();
    fakeUsersRepository = new FakeUsersRepository();

    uploadUserAvatar = new UploadUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to upload user avatar', async () => {
    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    await uploadUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  it('should not be able update avatar from non existing user', async () => {
    await expect(
      uploadUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFilename: 'avatar.jpg',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete a old avatar when updatething new one', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    await uploadUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'old.jpg',
    });

    await uploadUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'new.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('old.jpg');
    expect(user.avatar).toBe('new.jpg');
  });
});
