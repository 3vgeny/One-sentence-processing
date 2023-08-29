import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-rules',
  templateUrl: './list-rules.component.html',
  styleUrls: ['./list-rules.component.css'],
})
export class ListRulesComponent {
  @Input() rulesArr: any;
}
