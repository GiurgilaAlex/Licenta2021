import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';

import { AuthenticateService } from '../../core/services';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  loginInvalid = false;
  isOnRegisterPage = false;
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthenticateService,
    private readonly translateService: TranslateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });

    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
  }

  changeLanguage(event: MatButtonToggleChange): void {
    this.translateService.use(event.value);
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.isOnRegisterPage) {
        this.authService.register(this.form.value).pipe(take(1)).subscribe(() => {
          this.loginInvalid = false;
          this.router.navigateByUrl('/dashboard');
        },
          () => {
            this.loginInvalid = true;
          });
      } else {

        this.authService.login(this.form.value).pipe(take(1)).subscribe(() => {
          this.loginInvalid = false;
          this.router.navigateByUrl('/dashboard');
        },
          () => {
            this.loginInvalid = true;
          });
      }
    }
  }

  switchPage(): void {
    this.form.markAsUntouched();
    this.form.reset();
    this.isOnRegisterPage = !this.isOnRegisterPage;
  }
}
