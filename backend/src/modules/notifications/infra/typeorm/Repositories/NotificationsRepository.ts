import { MongoRepository, getMongoRepository } from 'typeorm';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNoticationDTO from '@modules/notifications/dtos/ICreateNoticationDTO';
import Notification from '../schemas/Notification';

class NotificationsRepository implements INotificationsRepository {
  private ormRepository: MongoRepository<Notification>;

  constructor() {
    this.ormRepository = getMongoRepository(Notification, 'mongodb');
  }

  public async create({
    recipient_id,
    content,
  }: ICreateNoticationDTO): Promise<Notification> {
    const notification = this.ormRepository.create({
      recipient_id,
      content,
    });

    await this.ormRepository.save(notification);

    return notification;
  }
}

export default NotificationsRepository;
