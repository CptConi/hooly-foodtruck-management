import { TestBed } from '@angular/core/testing';

import { HumanizeService } from './humanize.service';

describe('HumanizeService', () => {
  let service: HumanizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
