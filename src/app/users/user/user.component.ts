import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

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
    this.route.params.subscribe(
      (params: Params) => this.user = new User(params.id, params.name)
    );
  }

}
