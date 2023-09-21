import { Component, Input } from '@angular/core';
import {
  SentenceProcessingResponseItem,
  SentenceProcessingResponseMeaning,
  SentenceProcessingResponseRules,
} from '../sentence-processing-response';
import { SentenceProcessingService } from '../sentence-processing.service';

@Component({
  selector: 'app-visualization-meaning-and-rule',
  templateUrl: './visualization-meaning-and-rule.component.html',
  styleUrls: ['./visualization-meaning-and-rule.component.css'],
})
export class VisualizationMeaningAndRuleComponent {
  @Input() meaningsArr: any;
  @Input() list: any;

  getRule(clauseId: number): SentenceProcessingResponseRules[] | undefined {
    return this.SentenceProcessingService.getArrRulesForClauseId(
      this.list.rules,
      clauseId
    );
  }
  constructor(private SentenceProcessingService: SentenceProcessingService) {}
}
