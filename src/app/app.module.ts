import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {OverviewComponent} from './components/overview/overview.component';
import {DetailsComponent} from './components/details/details.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {DelayComponent} from './components/details/delay/delay.component';
import {PartialComponent} from './components/details/partial/partial.component';
import {MatrjoschkaComponent} from './components/details/matrjoschka/matrjoschka.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailsComponent,
    PageNotFoundComponent,
    DelayComponent,
    PartialComponent,
    MatrjoschkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
