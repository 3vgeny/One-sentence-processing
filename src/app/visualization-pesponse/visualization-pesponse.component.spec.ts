import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationPesponseComponent } from './visualization-pesponse.component';

describe('VisualizationPesponseComponent', () => {
  let component: VisualizationPesponseComponent;
  let fixture: ComponentFixture<VisualizationPesponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationPesponseComponent]
    });
    fixture = TestBed.createComponent(VisualizationPesponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
