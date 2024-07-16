import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  username = '';
  showSecret = false;
  log = [];

  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  onReset() {
    this.username = '';
  }
}
