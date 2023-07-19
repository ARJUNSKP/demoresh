import { TestBed } from '@angular/core/testing';

import { DatashearService } from './datashear.service';

describe('DatashearService', () => {
  let service: DatashearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatashearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
