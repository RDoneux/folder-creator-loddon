import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureRequiredComponent } from './feature-required.component';

describe('FeatureRequiredComponent', () => {
  let component: FeatureRequiredComponent;
  let fixture: ComponentFixture<FeatureRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
