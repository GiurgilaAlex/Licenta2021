import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskMeComponent } from './ask-me.component';

describe('AskMeComponent', () => {
  let component: AskMeComponent;
  let fixture: ComponentFixture<AskMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
