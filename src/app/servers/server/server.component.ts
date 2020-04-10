import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServerService } from '../server.service';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => this.server = this.serversService.getServer(+params.id)
    );
  }

}
