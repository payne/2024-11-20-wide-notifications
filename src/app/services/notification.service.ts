// services/notification.service.ts
import { Injectable } from '@angular/core';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [
    {
      id: 1,
      message: 'New message from John',
      icon: 'message',
      timestamp: new Date()
    },
    {
      id: 2,
      message: 'Your order has been shipped',
      icon: 'local_shipping',
      timestamp: new Date()
    },
    {
      id: 3,
      message: 'Meeting reminder: Team sync at 2 PM',
      icon: 'event',
      timestamp: new Date()
    }
  ];

  getNotifications(): Notification[] {
    return this.notifications;
  }

  addNotification(notification: Notification) {
    this.notifications.unshift(notification);
  }

  clearNotifications() {
    this.notifications = [];
  }
}
