import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if string contains substring', () => {
    expect(service.contains('This is the string to compare', 'the')).toBeTruthy();
    expect(service.contains('This is the string to compare', 'e st')).toBeTruthy();
    expect(service.contains('This is the string to compare', 'compare')).toBeTruthy();
    expect(service.contains('This is the string to compare', 'This')).toBeTruthy();
    expect(service.contains('This is the string to compare', 'this')).toBeTruthy();
    expect(service.contains('This is the string to compare', 'g to')).toBeTruthy();
  });

  it('should return false if string does not contain substring', () => {
    expect(service.contains('This is the string to compare', 'no')).toBeFalsy();
    expect(service.contains('This is the string to compare', 'est')).toBeFalsy();
    expect(service.contains('This is the string to compare', 'tocompare')).toBeFalsy();
  })
});
