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
  constructor(private SentenceProcessingService: SentenceProcessingService) {}

  currentRequest: Request = this.SentenceProcessingService.takeFormRequest();

  currentSentenceProcessingResponse?: SentenceProcessingResponse;

  createRequest(formCurrentRequest: Request): void {
    this.SentenceProcessingService.getSentenceProcessingResponse(
      formCurrentRequest
    ).subscribe((response) => {
      this.currentSentenceProcessingResponse = { list: response.list };
    });
  }
}
