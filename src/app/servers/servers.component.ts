import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServerService } from './server.service';
import { Server } from './server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serversService: ServerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload(): void {
    // Example of routing using relative path (breaks the app)
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }
}
