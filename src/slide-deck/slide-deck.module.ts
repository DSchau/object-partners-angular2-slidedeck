import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SlideDeckComponent } from './slide-deck.component';
import { SlidesComponent } from './slides/slides.component';
import { IntroComponent } from './intro/intro.component';
import { CounterComponent } from './intro/components/counter.component';
import { ComponentPlayground } from './util/component-playground.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    SlideDeckComponent,
    SlidesComponent,
    IntroComponent,
    CounterComponent,
    ComponentPlayground
  ],
  providers: [],
  bootstrap: [
    SlideDeckComponent
  ]
})
export class SlideDeckModule {}
