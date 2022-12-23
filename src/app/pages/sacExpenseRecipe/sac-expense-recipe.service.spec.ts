import { TestBed } from '@angular/core/testing';

import { SacExpenseRecipeService } from './sac-expense-recipe.service';

describe('SacExpenseRecipeService', () => {
  let service: SacExpenseRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SacExpenseRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
