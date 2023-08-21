import { TestBed } from '@angular/core/testing';

import { SentenceProcessingService } from './sentence-processing.service';

describe('SentenceProcessingService', () => {
  let service: SentenceProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentenceProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
