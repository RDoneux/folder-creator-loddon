import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseProfileModalComponent } from './add-course-profile-modal.component';

describe('AddCourseProfileModalComponent', () => {
  let component: AddCourseProfileModalComponent;
  let fixture: ComponentFixture<AddCourseProfileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseProfileModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseProfileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
