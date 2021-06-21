import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Profile } from '../types';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly urlBase = 'https://localhost:44301/api/Profile';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    })
  };

  headerData$: BehaviorSubject<Profile> = new BehaviorSubject(null);

  constructor(private readonly http: HttpClient) { }

  setHeaderData(profile: Profile): void {
    this.headerData$.next(profile);
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.urlBase, this.httpOptions);
  }

  add(profile: Profile): Observable<unknown> {
    return this.http.post(this.urlBase, profile, this.httpOptions);
  }

  update(profile: Profile): Observable<unknown> {
    return this.http.put(this.urlBase, profile, this.httpOptions);
  }
}