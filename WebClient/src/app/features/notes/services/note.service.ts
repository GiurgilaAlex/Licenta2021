import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from '../../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly urlBase = 'https://localhost:44301/api/Notes';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    })
  };

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.urlBase, this.httpOptions);
  }

  getById(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.urlBase}/${id}`, this.httpOptions);
  }

  add(note: Note): Observable<unknown> {
    return this.http.post(this.urlBase, note, this.httpOptions);
  }

  delete(id: string): Observable<unknown> {
    return this.http.delete(`${this.urlBase}/${id}`, this.httpOptions);
  }

  update(note: Note): Observable<unknown> {
    return this.http.put(this.urlBase, note, this.httpOptions);
  }
}
