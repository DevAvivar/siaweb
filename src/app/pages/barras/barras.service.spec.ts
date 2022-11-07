import { TestBed } from '@angular/core/testing';

import { BarrasService } from './barras.service';

describe('BarrasService', () => {
  let service: BarrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
