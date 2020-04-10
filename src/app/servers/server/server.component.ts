import { Component, OnInit } from '@angular/core';

import { ServerService } from '../server.service';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServerService) {
  }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
