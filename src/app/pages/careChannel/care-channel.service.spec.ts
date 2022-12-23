import { TestBed } from '@angular/core/testing';

import { CareChannelService } from './care-channel.service';

describe('CareChannelService', () => {
  let service: CareChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
