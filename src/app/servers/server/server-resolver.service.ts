import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Server } from '../server.model';
import { ServerService } from '../server.service';

@Injectable({providedIn: 'root'})
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServerService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+route.params.id);
  }
}
