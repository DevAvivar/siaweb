import { TestBed } from '@angular/core/testing';

import { CrossCdService } from './cross-cd.service';

describe('CrossCdService', () => {
  let service: CrossCdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossCdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
