import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDocumentDisplayComponent } from './course-document-display.component';

describe('CourseDocumentDisplayComponent', () => {
  let component: CourseDocumentDisplayComponent;
  let fixture: ComponentFixture<CourseDocumentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDocumentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDocumentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
