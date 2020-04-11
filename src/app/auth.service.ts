import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  private loggedIn = false;

  login(): void {
    alert('You successfully logged in');
    this.loggedIn = true;
  }

  logout(): void {
    alert('You successfully logged out');
    this.loggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    // Simulate a timeout due to reaching a server
    return new Promise<boolean>(
      (resolve, reject) => {
        setTimeout(() => resolve(this.loggedIn), 1000);
      }
    );
  }
}
