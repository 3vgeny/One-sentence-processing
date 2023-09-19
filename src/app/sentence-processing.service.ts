import { Injectable } from '@angular/core';
import { formRequest, mockResponseJson } from './mock-request-response';
import {
  ClassSentenceProcessingResponse,
  SentenceProcessingResponse,
} from './sentence-processing-response';
import { UserGithubAccount, ClassUserGithubAccount } from './DataFromGithub';
import { Request } from './request';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SentenceProcessingService {
  constructor(
    private http: HttpClient // private ClassUserGithubAccount: ClassUserGithubAccount
  ) {}

  private mockResponseJsonUrl = 'api/mockResponseJson';

  getSentenceProcessingResponse(
    currentRequest: Request
  ): Observable<ClassSentenceProcessingResponse> {
    console.log('Test display console log');
    currentRequest = this.replaceSpacesRequest(currentRequest);
    return this.http
      .post<SentenceProcessingResponse>(
        `/meaning-processor/rest/api/v3/process-one-profile?profileType=${currentRequest.profileType}&section=${currentRequest.section}&description=${currentRequest.description}&q=${currentRequest.keyWord}&name=${currentRequest.name}`,
        {}
      )
      .pipe(map((options) => new ClassSentenceProcessingResponse(options)));
  }

  // getSentenceProcessingResponse() {
  //   const mockResponse: SentenceProcessingResponse =
  //     JSON.parse(mockResponseJson);

  //   return this.http.get<SentenceProcessingResponse>(
  //     JSON.parse(this.mockResponseJsonUrl)
  //   );
  // }

  replaceSpaces(value: string): string {
    return value.replace(/\s+/gi, '%20');
  }

  replaceSpacesRequest(request: Request): Request {
    let update: Request = this.takeFormRequest();
    for (let field in request) {
      // update[field] = this.replaceSpaces(request[field]);
      request[field] = this.replaceSpaces(request[field]);
    }
    return update;
  }

  takeFormRequest() {
    let currentRequest: Request = {
      profileType: '',
      section: '',
      description: '',
      keyWord: '',
      name: '',
    };
    return currentRequest;
  }
}
