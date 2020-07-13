import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFilterComponent } from './notes-filter.component';

describe('NotesFilterComponent', () => {
  let component: NotesFilterComponent;
  let fixture: ComponentFixture<NotesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
