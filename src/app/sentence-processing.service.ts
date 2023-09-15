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

  // mockResponseJSONFromServer: any = this.http
  //   .get<string>('api/mockResponseJson')
  //   .subscribe((response) => {
  //     this.mockResponseJSONFromServer = response;
  //   });

  // mockResponseJSONFromServer: any;
  // getDataFromServer() {
  //   // this.http.get<string>('api/mockResponseJson').subscribe((response) => {
  //   //   this.mockResponseJSONFromServer = response;
  //   // });
  //   return this.http.get<string>('api/mockResponseJson')
  // }
  // mockResponseJSONFromServerString: string =
  //   this.mockResponseJSONFromServer.toString();

  // getSentenceProcessingResponse() {
  //   // let getDataFromServe = this.getDataFromServer();
  //   console.log(this.mockResponseJSONFromServer);

  //   if (this.mockResponseJSONFromServer) {
  //     const mockResponse: SentenceProcessingResponse = JSON.parse(
  //       this.mockResponseJSONFromServer
  //     );
  //     return mockResponse;
  //   } else {
  //     console.log("Don't have data from server");
  //     return;
  //   }
  //   // console.log(
  //   //   'mockResponseJSONFromServerString: ' +
  //   //     typeof this.mockResponseJSONFromServerString +
  //   //     ', inside: ' +
  //   //     this.mockResponseJSONFromServerString
  //   // );
  //   // console.log(
  //   //   'mockResponse: ' + typeof mockResponse + ', inside: ' + mockResponse
  //   // );
  // }

  // response: any;
  // getInfoGitApiAngular() {
  //   this.http
  //     .get('https://api.github.com/search/users?q=vladilen')
  //     .subscribe((response) => (this.response = response));
  //   return this.response;
  // }

  //-------------------------------------------------------------------------------------------------------------------------------------------------------
  // mockResponseJSONFromServer?: string = '';
  // mockResponseJSONFromServerString?: string;
  // mockResponseParseFromServer?: SentenceProcessingResponse;

  // // test: number = 1;
  // // response: any;

  // getSentenceProcessingResponse() {
  //   // console.log('test Output Console Log');
  //   // console.log(this.mockResponseParseFromServer);

  //   // this.http.get<string>('api/mockResponseJson').subscribe((response) => {
  //   //   this.mockResponseJSONFromServer = response;
  //   //   console.log(
  //   //     'mockResponseJSONFromServer: ' +
  //   //       typeof this.mockResponseJSONFromServer +
  //   //       ', inside: ' +
  //   //       this.mockResponseJSONFromServer
  //   //   );
  //   //   console.log('get request - complete');

  //   //   if (this.mockResponseJSONFromServer) {
  //   //     // this.mockResponseJSONFromServerString =
  //   //     //   this.mockResponseJSONFromServer.toString();
  //   //     // console.log(
  //   //     //   'mockResponseJSONFromServerString: ' +
  //   //     //     typeof this.mockResponseJSONFromServerString +
  //   //     //     ', inside: ' +
  //   //     //     this.mockResponseJSONFromServerString
  //   //     // );

  //   //     this.mockResponseParseFromServer = JSON.parse(
  //   //       this.mockResponseJSONFromServer
  //   //     );
  //   //     console.log('get mockResponseParseFromServer after JSON.parse()');
  //   //     console.log(
  //   //       'mockResponseParseFromServer: ' +
  //   //         typeof this.mockResponseParseFromServer +
  //   //         ', inside: ' +
  //   //         this.mockResponseParseFromServer
  //   //     );
  //   //   } else {
  //   //     console.log('mockResponseJSONFromServer - undefined');
  //   //   }
  //   // });
  //   // // const body = {
  //   // //   profileType: 'company',
  //   // //   section: 'description',
  //   // //   description: 'Our%20company%20does%20social%20media%20services.',
  //   // //   q: 'social%20media',
  //   // //   name: 'some%20name',
  //   // // };
  //   // // const resultPostRequest = this.http
  //   // //   .post(
  //   // //     'https://ec2-3-208-10-160.compute-1.amazonaws.com/meaning-processor/rest/api/v3/process-one-profile',
  //   // //     body
  //   // //   )
  //   // //   .subscribe((response) => {
  //   // //     this.response = response;
  //   // //     console.log(
  //   // //       'response: ' + typeof this.response + ', inside: ' + this.response
  //   // //     );
  //   // //   });
  //   // this.test = 2;
  //   // console.log('get request - complete 2');
  //   // return this.mockResponseParseFromServer;
  //   // return JSON.parse(
  //   //   this.http
  //   //     .get('api/mockResponseJson')
  //   //     .subscribe((response) => {
  //   //       this.mockResponseJSONFromServer = response;
  //   //       console.log(
  //   //         'mockResponseJSONFromServer: ' +
  //   //           typeof this.mockResponseJSONFromServer +
  //   //           ', inside: ' +
  //   //           this.mockResponseJSONFromServer
  //   //       );
  //   //     })
  //   //     .toString()
  //   // );
  // this.http.get<string>('api/mockResponseJson').subscribe((response) => {this.mockResponseParseFromServer = JSON.parse(response);});
  // return this.mockResponseParseFromServer;
  // }

  //-------------------------------------------------------------------------------------------------------------------------------------------------------
  public getSentenceProcessingResponse(
    currentRequest: Request
  ): Observable<ClassSentenceProcessingResponse> {
    console.log('Test display console log');
    return this.http
      .post<SentenceProcessingResponse>(
        `/meaning-processor/rest/api/v3/process-one-profile?profileType=${currentRequest.profileType}&section=${currentRequest.section}&description=${currentRequest.description}&q=${currentRequest.keyWord}&name=${currentRequest.name}`,
        {}
      )
      .pipe(map((options) => new ClassSentenceProcessingResponse(options)));
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------------
  // public getSentenceProcessingResponse(): Observable<UserGithubAccount> {
  //   console.log('Test display console log');
  //   return this.http
  //     .get<UserGithubAccount>('https://api.github.com/users/octocat')
  //     .pipe(map((options) => new UserGithubAccount(options)));
  // }
  //-------------------------------------------------------------------------------------------------------------------------------------------------------
  // public getSentenceProcessingResponse() {
  //   console.log('Test display console log');
  //   return this.http.get<UserGithubAccount>(
  //     'https://api.github.com/users/octocat'
  //   );
  // }
  //-------------------------------------------------------------------------------------------------------------------------------------------------------
  // callFunctionTest(): boolean {
  //   return this.mockResponseParseFromServer ? true : false;
  // }

  // testOutputConsoleLog(): void {
  //   console.log('test Output Console Log');

  //   this.http.get('api/mockResponseJson').subscribe((response) => {
  //     this.mockResponseJSONFromServer = response;
  //     console.log(
  //       'mockResponseJSONFromServer: ' +
  //         typeof this.mockResponseJSONFromServer +
  //         ', inside: ' +
  //         this.mockResponseJSONFromServer
  //     );
  //     console.log('get request - complete');

  //     if (this.mockResponseJSONFromServer) {
  //       this.mockResponseJSONFromServerString =
  //         this.mockResponseJSONFromServer.toString();
  //       console.log(
  //         'mockResponseJSONFromServerString: ' +
  //           typeof this.mockResponseJSONFromServerString +
  //           ', inside: ' +
  //           this.mockResponseJSONFromServerString
  //       );
  //       this.mockResponseParseFromServer = JSON.parse(
  //         this.mockResponseJSONFromServerString
  //       );
  //       console.log('get mockResponseParseFromServer after JSON.parse()');
  //       console.log(
  //         'mockResponseParseFromServer: ' +
  //           typeof this.mockResponseParseFromServer +
  //           ', inside: ' +
  //           this.mockResponseParseFromServer
  //       );
  //     } else {
  //       console.log('mockResponseJSONFromServer - undefined');
  //     }
  //   });
  //   console.log('get request - complete 2');
  //   return this.mockResponseParseFromServer;
  // }

  // getSentenceProcessingResponse() {
  //   const mockResponse: SentenceProcessingResponse =
  //     JSON.parse(mockResponseJson);

  //   return this.http.get<SentenceProcessingResponse>(
  //     JSON.parse(this.mockResponseJsonUrl)
  //   );
  // }

  // mockResponseJson: any;
  // mockResponse?: SentenceProcessingResponse;
  // getSentenceProcessingResponse2() {
  //   this.http.get(this.mockResponseJsonUrl).subscribe((a) => {
  //     this.mockResponseJson = a;
  //     console.log(typeof mockResponseJson);
  //   });
  //   const mockResponseJsonStr = JSON.stringify(this.mockResponseJson);

  //   console.log(typeof mockResponseJsonStr);

  //   const mockResponse: SentenceProcessingResponse = JSON.parse(
  //     this.mockResponseJson
  //   );
  //   return mockResponse;
  // }

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
