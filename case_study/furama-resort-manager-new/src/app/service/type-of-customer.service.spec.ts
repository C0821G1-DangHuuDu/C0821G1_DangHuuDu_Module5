import { TestBed } from '@angular/core/testing';

import { TypeOfCustomerService } from './type-of-customer.service';

describe('TypeOfCustomerService', () => {
  let service: TypeOfCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
