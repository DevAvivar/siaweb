import { TestBed } from '@angular/core/testing';

import { SacMediaService } from './sac-media.service';

describe('SacMediaService', () => {
  let service: SacMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SacMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
