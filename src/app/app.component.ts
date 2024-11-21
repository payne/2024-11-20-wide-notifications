// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { NotificationService } from './services/notification.service';
import { Notification } from './models/notification.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>Notification App</span>
      <span class="spacer"></span>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon [matBadge]="notifications.length" matBadgeColor="warn">
          notifications
        </mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <div class="notification-menu">
          @if (notifications.length === 0) {
            <button mat-menu-item disabled>No notifications</button>
          } @else {
            @for (notification of notifications; track notification.id) {
              <button mat-menu-item>
                <mat-icon>{{ notification.icon }}</mat-icon>
                <span>{{ notification.message }}</span>
              </button>
            }
          }
        </div>
      </mat-menu>
    </mat-toolbar>
    <div class="content">
      <h1>Welcome to {{ title }}!</h1>
    </div>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }

    .content {
      padding: 20px;
    }

    .notification-menu {
      max-height: 300px;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {
  title = 'notification-app';
  notifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {
    this.notifications = this.notificationService.getNotifications();
  }
}

