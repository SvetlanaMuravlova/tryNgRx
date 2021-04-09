import { TestBed } from '@angular/core/testing';

import { CountApisService } from './count-apis.service';

describe('CountApisService', () => {
  let service: CountApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
