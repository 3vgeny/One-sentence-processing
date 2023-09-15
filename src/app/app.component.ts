import { Component } from '@angular/core';
import { SentenceProcessingService } from './sentence-processing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstApp';
  constructor(public SentenceProcessingService: SentenceProcessingService) {}
  a?: SentenceProcessingService;
  // aaa() {
  //   this.a = this.SentenceProcessingService.test();
  // }
}
