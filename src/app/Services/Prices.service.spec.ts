/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PricesService } from './Prices.service';

describe('Service: Prices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricesService]
    });
  });

  it('should ...', inject([PricesService], (service: PricesService) => {
    expect(service).toBeTruthy();
  }));
});
