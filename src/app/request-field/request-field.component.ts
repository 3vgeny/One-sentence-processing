import { Component, Input } from '@angular/core';
import { Request } from '../request';
import { SentenceProcessingService } from '../sentence-processing.service';

@Component({
  selector: 'app-request-field',
  templateUrl: './request-field.component.html',
  styleUrls: ['./request-field.component.css'],
})
export class RequestFieldComponent {
  constructor(private SentenceProcessingService: SentenceProcessingService) {}
  currentRequest = this.SentenceProcessingService.takeFormRequest();
}
