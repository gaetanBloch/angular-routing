import { Server, ServerInfo } from './server.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServerService {
  private servers = [
    new Server('Production server', 'online', 1),
    new Server('Test server', 'offline', 2),
    new Server('Dev server', 'offline', 3)
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    return this.servers.find(
      (s: Server) => s.id === id
    );
  }

  updateServer(id: number, serverInfo: ServerInfo) {
    const server = this.servers.find(
      (s: Server) => s.id === id
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
