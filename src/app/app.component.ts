import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>My App</span>
      <span style="flex: 1 1 auto;"></span>
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon [matBadge]="3" matBadgeColor="warn">notifications</mat-icon>
      </button>
      <mat-menu #menu="matMenu" class="notification-menu">
        <div class="notification-items">
          <button mat-menu-item>
            <mat-icon>message</mat-icon>
            <span>New message from John</span>
          </button>
          <button mat-menu-item>
            <mat-icon>local_shipping</mat-icon>
            <span>Your order has been shipped</span>
          </button>
          <button mat-menu-item>
            <mat-icon>event</mat-icon>
            <span>Meeting reminder: Team sync at 2 PM</span>
          </button>
        </div>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    :host {
      display: block;
    }

    :host .mat-mdc-menu-panel.notification-menu {
      width: 400px;
      max-width: none !important;
    }

    :host .notification-items {
      width: 100%;
    }

    :host .notification-items .mat-mdc-menu-item {
      height: auto;
      line-height: 1.5;
      padding: 12px 16px;
    }

    :host .notification-items .mat-mdc-menu-item .mat-icon {
      margin-right: 16px;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'notification-app';
}
