import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})
export class DashboardCardComponent {
  @Input() svgIcon: string;
  @Input() title: string;
  @Input() description: string;
  @Input() url: string;

  constructor(private readonly router: Router) { }

  goToUrl(): void {
    this.router.navigateByUrl(this.url);
  }
}
