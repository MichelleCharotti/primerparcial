import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { terminoGuard } from './termino.guard';

describe('terminoGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => terminoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
