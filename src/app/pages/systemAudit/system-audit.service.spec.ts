import { TestBed } from '@angular/core/testing';

import { SystemAuditService } from './system-audit.service';

describe('SystemAuditService', () => {
  let service: SystemAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
