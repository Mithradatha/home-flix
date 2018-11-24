/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlixService } from './flix.service';

describe('Service: Flix', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlixService]
    });
  });

  it('should ...', inject([FlixService], (service: FlixService) => {
    expect(service).toBeTruthy();
  }));
});
