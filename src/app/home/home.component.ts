import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  onLoadServer(id: number): void {
    // Complex calculation
    // (...)
    // this.router.navigateByUrl('/servers');
    this.router.navigate(
      ['/servers', id, 'edit'],
      {queryParams: {allowEdit: '1'}, fragment: 'loading'}
    );
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
