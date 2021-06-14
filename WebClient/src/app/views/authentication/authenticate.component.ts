import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  constructor(
    private readonly router: Router,
    private readonly authService: AuthenticateService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
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
    this.name.setValidators(this.isOnRegisterPage ? Validators.required : []);
    this.form.markAsUntouched();
    this.form.reset();
    this.isOnRegisterPage = !this.isOnRegisterPage;
  }
}
