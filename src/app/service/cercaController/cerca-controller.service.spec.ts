import { TestBed } from '@angular/core/testing';

import { CercaControllerService } from './cerca-controller.service';

describe('CercaControllerService', () => {
  let service: CercaControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CercaControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
