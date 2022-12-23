import { TestBed } from '@angular/core/testing';

import { SacItemService } from './sac-item.service';

describe('SacItemService', () => {
  let service: SacItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SacItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
