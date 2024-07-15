import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent],
  templateUrl: `./servers.component.html`,
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was created';
  }
}
