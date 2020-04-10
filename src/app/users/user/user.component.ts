import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // This become obsolete because of the subscription bellow
    this.user = new User(
      // this.route.snapshot.params['id'],
      // this.route.snapshot.paramMap.get('id'),
      this.route.snapshot.params.id,
      this.route.snapshot.params.name
    );
    // Subscribe to change in parameters to reload the component
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => this.user = new User(params.id, params.name)
    );
  }

  ngOnDestroy(): void {
    // Useless here because Angular does it for us
    this.paramsSubscription.unsubscribe();
  }

}
