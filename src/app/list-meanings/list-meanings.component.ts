import { Component, Input } from '@angular/core';
import { SentenceProcessingResponseItem } from '../sentence-processing-response';
// Displays minings in one div in a column
// import { VisualizationPesponseComponent } from '../visualization-pesponse/visualization-pesponse.component';

@Component({
  selector: 'app-list-meanings',
  templateUrl: './list-meanings.component.html',
  styleUrls: ['./list-meanings.component.css'],
})
export class ListMeaningsComponent {
  @Input() meaningsArr: any;

  // Displays minings in one div in a column
  // @Input() list!: SentenceProcessingResponseItem;
}
