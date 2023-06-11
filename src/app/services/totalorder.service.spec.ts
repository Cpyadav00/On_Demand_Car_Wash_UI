import { TestBed } from '@angular/core/testing';

import { TotalorderService } from './totalorder.service';

describe('TotalorderService', () => {
  let service: TotalorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
