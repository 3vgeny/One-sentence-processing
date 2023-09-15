import { Component, Input } from '@angular/core';
import { Request } from '../request';
import { SentenceProcessingService } from '../sentence-processing.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SentenceProcessingResponse } from '../sentence-processing-response';
import { UserGithubAccount, ClassUserGithubAccount } from '../DataFromGithub';
@Component({
  selector: 'app-request-field',
  templateUrl: './request-field.component.html',
  styleUrls: ['./request-field.component.css'],
})
export class RequestFieldComponent {
  constructor(
    private SentenceProcessingService: SentenceProcessingService // private ClassUserGithubAccount: ClassUserGithubAccount
  ) {}
  currentRequest: Request = this.SentenceProcessingService.takeFormRequest();

  // currentSentenceProcessingResponse?: SentenceProcessingResponse;

  check: any;
  a?: object;
  // responseAboutAngularGithubApi?: any;

  // getData() {
  //   let a = this.SentenceProcessingService.getDataFromServer();
  //   console.log(a);
  //   console.log('Call getDataFromServer()');
  // }

  // updateConst?: UpdateConst;
  // userGithubAccount?: UserGithubAccount;

  currentSentenceProcessingResponse?: SentenceProcessingResponse;
  createRequest() {
    this.SentenceProcessingService.getSentenceProcessingResponse(
      this.currentRequest
    ).subscribe((response) => {
      this.currentSentenceProcessingResponse = { list: response.list };
    });
    //   this.a =
    //     this.SentenceProcessingService.getSentenceProcessingResponse().subscribe(
    //       (response) => {
    //         this.userGithubAccount = response;
    //         console.log(typeof response + '  ' + response);
    //         console.log(
    //           typeof this.userGithubAccount + '  ' + this.userGithubAccount
    //         );
    //       }
    //     );

    // this.SentenceProcessingService.getSentenceProcessingResponse().subscribe(
    //   (response) => {this.response=response}
    // );
    // this.SentenceProcessingService.getSentenceProcessingResponse().subscribe(
    //   (data) => {
    //     this.updateConst = {
    //       login: data.login,
    //       id: data.id,
    //       node_id: data.node_id,
    //       avatar_url: data.avatar_url,
    //       gravatar_id: data.gravatar_id,
    //       url: data.url,
    //       html_url: data.html_url,
    //       followers_url: data.followers_url,
    //       following_url: data.following_url,
    //       gists_url: data.gists_url,
    //       starred_url: data.starred_url,
    //       subscriptions_url: data.subscriptions_url,
    //       organizations_url: data.organizations_url,
    //       repos_url: data.repos_url,
    //       events_url: data.events_url,
    //       received_events_url: data.received_events_url,
    //       type: data.type,
    //       site_admin: data.site_admin,
    //       name: data.name,
    //       company: data.company,
    //       blog: data.blog,
    //       location: data.location,
    //       email: data.email,
    //       hireable: data.hireable,
    //       bio: data.bio,
    //       twitter_username: data.twitter_username,
    //       public_repos: data.public_repos,
    //       public_gists: data.public_gists,
    //       followers: data.followers,
    //       following: data.following,
    //       created_at: data.created_at,
    //       updated_at: data.updated_at,
    //     };
    //   }
    // );

    // this.SentenceProcessingService.getSentenceProcessingResponse();
    // this.currentSentenceProcessingResponse =
    //   this.SentenceProcessingService.getSentenceProcessingResponse();
    // setTimeout(() => {
    //   this.check = 333;
    // }, 2000);
    // this.responseAboutAngularGithubApi =
    //   this.SentenceProcessingService.getInfoGitApiAngular();
  }
}

// export interface UpdateConst {
//   login: string | undefined;
//   id: number | undefined;
//   node_id: string | undefined;
//   avatar_url: string | undefined;
//   gravatar_id: string | undefined;
//   url: string | undefined;
//   html_url: string | undefined;
//   followers_url: string | undefined;
//   following_url: string | undefined;
//   gists_url: string | undefined;
//   starred_url: string | undefined;
//   subscriptions_url: string | undefined;
//   organizations_url: string | undefined;
//   repos_url: string | undefined;
//   events_url: string | undefined;
//   received_events_url: string | undefined;
//   type: string | undefined;
//   site_admin: boolean | undefined;
//   name: string | undefined;
//   company: string | undefined;
//   blog: string | undefined;
//   location: string | undefined;
//   email: string | undefined;
//   hireable: string | undefined;
//   bio: string | undefined;
//   twitter_username: string | undefined;
//   public_repos: number | undefined;
//   public_gists: number | undefined;
//   followers: number | undefined;
//   following: number | undefined;
//   created_at: string | undefined;
//   updated_at: string | undefined;
// }
