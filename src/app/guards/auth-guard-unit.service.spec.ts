import { TestBed } from '@angular/core/testing';

import { AuthGuardUnitService } from './auth-guard-unit.service';

describe('AuthGuardUnitService', () => {
  let service: AuthGuardUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
