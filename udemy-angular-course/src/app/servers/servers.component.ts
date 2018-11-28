import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: `./servers.component.html`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreation: string = "no server was created"
  serverName = '';

  constructor() { setTimeout(() => {
    this.allowNewServer = true;
  }, 2500); }

  ngOnInit() {
  }

  onCreateServer() {
    return this.serverCreation = 'server was created just now'
  }

  onInputChange(event: any) {
    console.log(event);
  }
}
