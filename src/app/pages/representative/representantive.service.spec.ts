import { TestBed } from '@angular/core/testing';

import { RepresentantiveService } from './representantive.service';

describe('RepresentantiveService', () => {
  let service: RepresentantiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepresentantiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
