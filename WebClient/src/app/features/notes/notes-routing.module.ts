import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteDetailsComponent, NotesComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent
  },
  {
    path: 'details',
    component: NoteDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }