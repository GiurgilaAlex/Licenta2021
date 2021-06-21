import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared';
import { NotesComponent } from './containers/notes/notes.component';
import { NotesRoutingModule } from './notes-routing.module';
import { NoteDetailsComponent } from './containers/note-details/note-details.component';


@NgModule({
  declarations: [NotesComponent, NoteDetailsComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    SharedModule
  ]
})
export class NotesModule { }
