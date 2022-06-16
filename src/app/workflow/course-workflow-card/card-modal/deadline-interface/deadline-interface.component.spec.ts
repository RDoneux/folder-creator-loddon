import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineInterfaceComponent } from './deadline-interface.component';

describe('DeadlineInterfaceComponent', () => {
  let component: DeadlineInterfaceComponent;
  let fixture: ComponentFixture<DeadlineInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadlineInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadlineInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
