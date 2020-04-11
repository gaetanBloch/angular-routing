import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ServerService } from '../server.service';
import { Server, ServerInfo } from '../server.model';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServerService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // -- Does nothing --
    // The idea of how to access the query params and the fragment
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    // -- Does nothing --

    // Determine whether the server is editable or not
    this.route.queryParams.subscribe((queryParams: Params) => this.allowEdit = queryParams.allowEdit === '1');

    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params.id);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, new ServerInfo(this.serverName, this.serverStatus));
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes ?');
    } else {
      return true;
    }
  }
}
