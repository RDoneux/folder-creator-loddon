import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWorkflowCardComponent } from './course-workflow-card.component';

describe('CourseWorkflowCardComponent', () => {
  let component: CourseWorkflowCardComponent;
  let fixture: ComponentFixture<CourseWorkflowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWorkflowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWorkflowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
