import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowProgressComponent } from './workflow-progress.component';

describe('WorkflowProgressComponent', () => {
  let component: WorkflowProgressComponent;
  let fixture: ComponentFixture<WorkflowProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
