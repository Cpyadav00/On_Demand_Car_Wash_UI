import { TestBed } from '@angular/core/testing';

import { OrderViewTableService } from './order-view-table.service';

describe('OrderViewTableService', () => {
  let service: OrderViewTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderViewTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
