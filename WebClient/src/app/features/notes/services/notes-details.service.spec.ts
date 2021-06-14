import { TestBed } from '@angular/core/testing';

import { NotesDetailsService } from './notes-details.service';

describe('NotesDetailsService', () => {
  let service: NotesDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
