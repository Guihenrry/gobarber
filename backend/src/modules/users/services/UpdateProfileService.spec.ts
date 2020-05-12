import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'new-name',
      email: 'newemail@gobarber.com',
    });

    expect(updatedUser.name).toBe('new-name');
    expect(updatedUser.email).toBe('newemail@gobarber.com');
  });

  it('should not be able update the profile from non-existing user', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'non-existing',
        name: 'GoBarber',
        email: 'admin@gobarber.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'User',
      email: 'exist_email@gobarber.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'GoBarber',
        email: 'exist_email@gobarber.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'new-name',
      email: 'newemail@gobarber.com',
      old_password: '123456',
      password: 'new-password',
    });

    expect(updatedUser.password).toBe('new-password');
  });

  it('should be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'new-name',
        email: 'newemail@gobarber.com',
        password: 'new-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'new-name',
        email: 'newemail@gobarber.com',
        old_password: 'wrong-old-password',
        password: 'new-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
