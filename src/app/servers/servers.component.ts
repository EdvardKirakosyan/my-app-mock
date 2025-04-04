import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from '../server/server.component';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent, FormsModule],
  templateUrl: `./servers.component.html`,
  styleUrl: './servers.component.scss',
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'no server created';
  serverName = 'test_server';
  serverCreated = false;
  servers = ['testserver', 'testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'server was created! Name is ' + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
