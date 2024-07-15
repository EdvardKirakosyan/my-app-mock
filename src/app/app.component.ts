import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.scss',
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class AppComponent {}
