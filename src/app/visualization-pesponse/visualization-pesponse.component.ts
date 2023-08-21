import { Component } from '@angular/core';
import { SentenceProcessingResponse } from '../sentence-processing-response';
import { SentenceProcessingService } from '../sentence-processing.service';
@Component({
  selector: 'app-visualization-pesponse',
  templateUrl: './visualization-pesponse.component.html',
  styleUrls: ['./visualization-pesponse.component.css'],
})
export class VisualizationPesponseComponent {
  constructor(private SentenceProcessingService: SentenceProcessingService) {}
  currentSentenceProcessingResponse: SentenceProcessingResponse =
    this.SentenceProcessingService.getSentenceProcessingResponse();

  cars = [
    { stamp: 'BMW', number: 142, owner: 'Ann' },
    { stamp: 'Porche', number: 231, owner: 'Jo' },
    { stamp: 'Mersedes', number: 564, owner: 'Linda' },
  ];
  // car = { stamp: 'BMW', number: 142, owner: 'Ann' };
  // cars2 = ['bMW', 142, 'Ann'];
}
