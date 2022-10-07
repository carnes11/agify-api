import { TestBed } from '@angular/core/testing';

import { AgifyApiServiceService } from './agify-api-service.service';

describe('AgifyApiServiceService', () => {
  let service: AgifyApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgifyApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
