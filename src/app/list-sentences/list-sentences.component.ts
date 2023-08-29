import { Component, Input } from '@angular/core';
import { SentenceProcessingService } from '../sentence-processing.service';
import {
  SentenceProcessingResponse,
  SentenceProcessingResponseItem,
} from '../sentence-processing-response';

@Component({
  selector: 'app-list-sentences',
  templateUrl: './list-sentences.component.html',
  styleUrls: ['./list-sentences.component.css'],
})
export class ListSentencesComponent {
  @Input() list!: SentenceProcessingResponseItem;
  @Input() iList!: number;
  @Input() sentencesArr: any;
  @Input() iSentences: any;

  constructor(private SentenceProcessingService: SentenceProcessingService) {}
  currentSentenceProcessingResponse: SentenceProcessingResponse =
    this.SentenceProcessingService.getSentenceProcessingResponse();
}
