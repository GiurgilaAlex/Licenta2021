import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { ProfileService } from '../../services';
import { Profile } from '../../types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  data: Profile;

  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router) {
    this.profileService.headerData$.subscribe(data => {
      if (data) {
        this.data = {
          name: data.name,
          image: data?.image ? atob(data?.image) : null
        };
      }
    });
    if (!this.profileService.headerData$.value) {
      this.profileService.getProfile().subscribe(data => {
        this.profileService.setHeaderData(data);
      });
    }
  }

  goHome(): void {
    this.router.navigateByUrl('/dashboard');
  }

  goToProfile(): void {
    this.router.navigateByUrl('/profile');
  }
}