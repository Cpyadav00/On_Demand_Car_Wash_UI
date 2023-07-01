import { TestBed } from '@angular/core/testing';

import { InvoiveMailService } from './invoive-mail.service';

describe('InvoiveMailService', () => {
  let service: InvoiveMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiveMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
