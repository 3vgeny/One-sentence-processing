import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizationPesponseComponent } from './visualization-pesponse/visualization-pesponse.component';
import { RequestFieldComponent } from './request-field/request-field.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ListMeaningsComponent } from './list-meanings/list-meanings.component';
import { ListRulesComponent } from './list-rules/list-rules.component';
import { ListSentencesComponent } from './list-sentences/list-sentences.component';
import { ClausesComponentsComponent } from './clauses-components/clauses-components.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationPesponseComponent,
    RequestFieldComponent,
    ListMeaningsComponent,
    ListRulesComponent,
    ListSentencesComponent,
    ClausesComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
