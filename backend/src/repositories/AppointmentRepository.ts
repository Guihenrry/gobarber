import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  appoitments: Appointment[];

  constructor() {
    this.appoitments = [];
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appoitments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appoitments.push(appointment);

    return appointment;
  }

  public all(): Appointment[] {
    return this.appoitments;
  }
}

export default AppointmentsRepository;
