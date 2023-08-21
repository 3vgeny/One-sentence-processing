import { Injectable } from '@angular/core';
import { formRequest, mockResponseJson } from './mock-request-response';
import { SentenceProcessingResponse } from './sentence-processing-response';
import { Request } from './request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SentenceProcessingService {
  mockResponse: SentenceProcessingResponse = JSON.parse(mockResponseJson);
  constructor() {}
  getSentenceProcessingResponse() {
    return this.mockResponse;
  }
  takeFormRequest() {
    let currentRequest = formRequest;
    return currentRequest;
  }
}
