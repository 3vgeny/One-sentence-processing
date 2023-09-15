import { Component, Input } from '@angular/core';
import { SentenceProcessingResponse } from '../sentence-processing-response';
import { SentenceProcessingService } from '../sentence-processing.service';
import { ListMeaningsComponent } from '../list-meanings/list-meanings.component';

@Component({
  selector: 'app-visualization-pesponse',
  templateUrl: './visualization-pesponse.component.html',
  styleUrls: ['./visualization-pesponse.component.css'],
})
export class VisualizationPesponseComponent {
  constructor(private SentenceProcessingService: SentenceProcessingService) {}

  @Input() currentSentenceProcessingResponse?: SentenceProcessingResponse;

  // currentSentenceProcessingResponse: SentenceProcessingResponse =
  //   this.SentenceProcessingService.getSentenceProcessingResponse();
  // aaa() {
  //   this.SentenceProcessingService.testOutputConsoleLog();
  // }

  // cars = [
  //   { stamp: 'BMW', number: 142, owner: 'Ann' },
  //   { stamp: 'Porche', number: 231, owner: 'Jo' },
  //   { stamp: 'Mersedes', number: 564, owner: 'Linda' },
  // ];

  // arr: number[] = [1, 0, 2, 0, 0, 8, 13];
  // arrStr: string[] = ['asd', 'xcvvxz0', 'osos', 'soew'];
  // field: any = 55;

  // test: boolean = true;
  // a() {
  //   let x = 3;
  //   let y = 10;
  //   let test;
  //   if (x < y) {
  //     test = true;
  //   } else {
  //     test = false;
  //   }
  //   return test;
  // }

  // car = { stamp: 'BMW', number: 142, owner: 'Ann' };
  // cars2 = ['bMW', 142, 'Ann'];
}
// let x = 5;
// let y = 10;
// let test;
// if (x > y) {
//   test = false;
// } else {
//   test = true;
// }
