import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthResponse, LoginRequest, RegisterRequest } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  login(data: LoginRequest): Observable<unknown> {
    return this.httpClient.post('https://localhost:44301/api/AuthManagement/Login', data).pipe(tap((response: AuthResponse) => {
      localStorage.setItem('token', JSON.stringify(response.token));
    }));
  }

  register(data: RegisterRequest): Observable<unknown> {
    return this.httpClient.post('https://localhost:44301/api/AuthManagement/Register', data).pipe(tap((response: AuthResponse) => {
      localStorage.setItem('token', JSON.stringify(response.token));
    }))
  }
}