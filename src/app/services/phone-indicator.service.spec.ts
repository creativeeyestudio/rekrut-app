import { TestBed } from '@angular/core/testing';

import { PhoneIndicatorService } from './phone-indicator.service';

describe('PhoneIndicatorService', () => {
  let service: PhoneIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
