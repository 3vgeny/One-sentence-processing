import { Component, Input } from '@angular/core';
import { SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects } from '../sentence-processing-response';

@Component({
  selector: 'app-clauses-components',
  templateUrl: './clauses-components.component.html',
  styleUrls: ['./clauses-components.component.css'],
})
export class ClausesComponentsComponent {
  @Input()
  clausesComponent!: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
}
