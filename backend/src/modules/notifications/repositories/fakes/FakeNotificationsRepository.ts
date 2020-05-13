import { ObjectID } from 'mongodb';

import Notification from '../../infra/typeorm/schemas/Notification';
import INotificationsRepository from '../INotificationsRepository';
import ICreateNoticationDTO from '../../dtos/ICreateNoticationDTO';

class FakeNotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNoticationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, {
      id: new ObjectID(),
      content,
      recipient_id,
    });

    return notification;
  }
}

export default FakeNotificationsRepository;
