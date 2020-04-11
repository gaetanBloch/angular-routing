import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { ServerService } from '../server.service';
import { Server } from '../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(private serversService: ServerService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    // // This one is obsolete because of the following subscription
    // const id = +this.route.snapshot.params.id;
    // this.server = this.serversService.getServer(id);
    //
    // // Subscription to change in the parameters of the route
    // this.route.params.subscribe(
    //   (params: Params) => this.server = this.serversService.getServer(+params.id)
    // );

    // We get the server by using the resolver, rendering the code above obsolete
    this.route.data.subscribe((data: Data) => this.server = data.server);
  }

  onEdit(): void {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
