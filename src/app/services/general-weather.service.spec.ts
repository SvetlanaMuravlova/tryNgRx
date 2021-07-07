import { TestBed } from '@angular/core/testing';

import { CommonForGeneralLocationsService } from './general-weather.service';

describe('CommonService', () => {
  let service: CommonForGeneralLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonForGeneralLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
