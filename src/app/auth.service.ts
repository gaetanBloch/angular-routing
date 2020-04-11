import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  private loggedIn = false;

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
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
