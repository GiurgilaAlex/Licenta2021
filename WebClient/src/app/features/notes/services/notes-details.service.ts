import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesDetailsService {

  noteId$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }

  setNoteId(id: string): void {
    this.noteId$.next(id);
  }
}
