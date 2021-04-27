/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { S_DateService } from './S_Date.service';

describe('Service: S_Date', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S_DateService]
    });
  });

  it('should ...', inject([S_DateService], (service: S_DateService) => {
    expect(service).toBeTruthy();
  }));
});
