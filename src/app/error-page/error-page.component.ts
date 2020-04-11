import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // First line is useless because in case of changes it won't be reflected on the error message
    // this.errorMessage = this.route.snapshot.data.message;
    this.route.data.subscribe((data: Data) => this.errorMessage = data.message);
  }

}
