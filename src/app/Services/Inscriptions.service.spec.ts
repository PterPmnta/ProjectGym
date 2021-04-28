/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InscriptionsService } from './Inscriptions.service';

describe('Service: Inscriptions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscriptionsService]
    });
  });

  it('should ...', inject([InscriptionsService], (service: InscriptionsService) => {
    expect(service).toBeTruthy();
  }));
});
