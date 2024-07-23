import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleComponent } from './edit-single.component';

describe('EditSingleComponent', () => {
  let component: EditSingleComponent;
  let fixture: ComponentFixture<EditSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSingleComponent]
    });
    fixture = TestBed.createComponent(EditSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
