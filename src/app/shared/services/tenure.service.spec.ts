import { TestBed } from '@angular/core/testing';

import { TenureService } from './tenure.service';

describe('TenureService', () => {
  let service: TenureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
