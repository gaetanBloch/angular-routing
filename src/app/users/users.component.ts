import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    new User(1, 'Max'),
    new User(2, 'Anna'),
    new User(3, 'Chris')
  ];
}
