import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DashboardCardComponent, HeaderComponent } from './components';
import { NoteCardComponent } from './components/note-card/note-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardCardComponent,
    NoteCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatCardModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    HeaderComponent,
    DashboardCardComponent,
    NoteCardComponent
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class SharedModule { }