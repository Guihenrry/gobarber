import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    const profile = await showProfile.execute(user.id);

    expect(profile.name).toBe('GoBarber');
    expect(profile.email).toBe('admin@gobarber.com');
  });

  it('should not be able show the profile from non-existing user', async () => {
    await expect(
      showProfile.execute('non-existing-user'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
