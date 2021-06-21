import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/types';

import { NotesDetailsService, NoteService } from '../../services';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {
  isFormChangedAndValid: boolean;
  note: Note;
  isEditMode: boolean;
  form: FormGroup;

  constructor(
    private readonly notesDetailsService: NotesDetailsService,
    private readonly service: NoteService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.initForm();
    const id = this.notesDetailsService.noteId$.value;
    this.isEditMode = id !== null;
    if (this.isEditMode) {
      this.service.getById(id).subscribe(data => {
        this.form.patchValue(data);
      });
    }

    this.form.valueChanges.subscribe(() => {
      this.isFormChangedAndValid = this.form.valid && !this.form.pristine;
    });
  }

  onSubmit(): void {
    this.form.get('createdAt').setValue((new Date()).toLocaleString());
    if (this.isEditMode) {
      this.service.update(this.form.value).subscribe(() => {
        this.goBack();
      });
    } else {
      this.service.add(this.form.value).subscribe(() => {
        this.goBack();
      });
    }
  }

  removeNote(): void {
    this.service.delete(this.form.get('id').value).subscribe(() => {
      this.goBack();
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/notes');
  }

  private initForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      description: new FormControl(null),
      createdAt: new FormControl(null)
    })
  }

}
