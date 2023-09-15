import { Component, Input } from '@angular/core';
import { SentenceProcessingResponseSentensesClauses0ExtraPartsDobjOrNsubjOrPrep } from '../sentence-processing-response';

@Component({
  selector: 'app-clauses0-extra-parts',
  templateUrl: './clauses0-extra-parts.component.html',
  styleUrls: ['./clauses0-extra-parts.component.css'],
})
export class Clauses0ExtraPartsComponent {
  @Input()
  currentFieldExtraParts!: SentenceProcessingResponseSentensesClauses0ExtraPartsDobjOrNsubjOrPrep;
  @Input() currentFieldExtraPartsName!: string;
}
