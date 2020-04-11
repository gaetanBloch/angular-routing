import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServerService } from '../server.service';
import { Server, ServerInfo } from '../server.model';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: Server;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // The idea of how to access the query params and the fragment
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params.id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, new ServerInfo(this.serverName, this.serverStatus));
  }
}
