import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Note } from '../../../../shared/types';
import { NotesDetailsService, NoteService } from '../../services';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[];

  constructor(
    private readonly notesDetailsService: NotesDetailsService,
    private readonly service: NoteService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.notes = data;
    });
  }

  goToDetails(id: string): void {
    this.notesDetailsService.setNoteId(id);
    this.router.navigate(['/notes/details']);
  }

}
