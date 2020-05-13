import ListProviderAppointmentService from './ListProviderAppointmentsService';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

let listProviderAppointment: ListProviderAppointmentService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderAppointment = new ListProviderAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the provider appointments in on day', async () => {
    const appointment1 = await fakeAppointmentsRepository.create({
      date: new Date(2020, 4, 12, 12),
      provider_id: 'provider_id',
      user_id: 'user_id',
    });

    const appointment2 = await fakeAppointmentsRepository.create({
      date: new Date(2020, 4, 12, 13),
      provider_id: 'provider_id',
      user_id: 'user_id',
    });

    const appointments = await listProviderAppointment.execute({
      provider_id: 'provider_id',
      day: 12,
      month: 5,
      year: 2020,
    });

    expect(appointments).toEqual([appointment1, appointment2]);
  });
});
