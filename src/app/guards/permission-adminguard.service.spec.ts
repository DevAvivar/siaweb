import { TestBed } from '@angular/core/testing';

import { PermissionADMINGuardService } from './permission-adminguard.service';

describe('PermissionADMINGuardService', () => {
  let service: PermissionADMINGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermissionADMINGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
