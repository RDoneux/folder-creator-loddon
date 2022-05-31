import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedTagComponent } from './assigned-tag.component';

describe('AssignedTagComponent', () => {
  let component: AssignedTagComponent;
  let fixture: ComponentFixture<AssignedTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
