import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div style="text-align: center; margin-top: 100px;">
      <h1>Welcome to Dashboard</h1>
      <button mat-raised-button color="warn" (click)="logout()">Logout</button>
    </div>
  `
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}