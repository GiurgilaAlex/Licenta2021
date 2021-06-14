import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../types';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note: Note;
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  goToDetails(): void {
    this.onClick.emit(this.note.id);
  }
}
