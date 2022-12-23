import { TestBed } from '@angular/core/testing';

import { ReasonComplaintService } from './reason-complaint.service';

describe('ReasonComplaintService', () => {
  let service: ReasonComplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReasonComplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
