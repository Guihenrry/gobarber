import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Due',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'John Trê',
      email: 'johntre@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    const users = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(users).toEqual([{ ...user1 }, { ...user2 }]);
  });

  it('should be able cache the list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'John Due',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'GoBarber',
      email: 'admin@gobarber.com',
      password: '123456',
    });

    const findAllProviders = jest.spyOn(
      fakeUsersRepository,
      'findAllProviders',
    );

    await listProviders.execute({
      user_id: loggedUser.id,
    });

    const users = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(users).toEqual([
      { ...user1, avatar_url: null, password: undefined },
    ]);
    expect(findAllProviders).toHaveBeenCalledTimes(1);
  });
});
