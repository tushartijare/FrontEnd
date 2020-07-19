import { TestBed } from '@angular/core/testing';

import { EnquireDetailsService } from './enquire-details.service';

describe('EnquireDetailsService', () => {
  let service: EnquireDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquireDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
