import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({providedIn: 'root'})
export class UserService {
  private users = [
    new User(1, 'Max'),
    new User(2, 'Anna'),
    new User(3, 'Chris')
  ];

  getUsers(): User[] {
    return this.users;
  }
}
