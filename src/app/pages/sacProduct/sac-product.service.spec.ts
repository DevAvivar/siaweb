import { TestBed } from '@angular/core/testing';

import { SacProductService } from './sac-product.service';

describe('SacProductService', () => {
  let service: SacProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SacProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
