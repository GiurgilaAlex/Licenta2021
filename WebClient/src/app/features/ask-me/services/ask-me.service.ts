import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Answer, QuestionRequest } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AskMeService {
  private readonly urlBase = 'https://localhost:44301/api/AskMe/question';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    })
  };

  constructor(private readonly http: HttpClient) { }

  getAnswer(question: QuestionRequest): Observable<Answer> {
    return this.http.post<Answer>(this.urlBase, question, this.httpOptions);
  }
}