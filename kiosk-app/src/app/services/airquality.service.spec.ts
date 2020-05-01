import { TestBed } from '@angular/core/testing';

import { AirqualityService } from './airquality.service';

describe('AirqualityService', () => {
  let service: AirqualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirqualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
