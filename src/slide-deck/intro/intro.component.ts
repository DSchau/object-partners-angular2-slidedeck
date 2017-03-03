import { Component } from '@angular/core';

const counterCode = require('!!raw-loader!./components/counter.component');

@Component({
  selector: '[slides-intro]',
  templateUrl: './intro.component.pug',
  styles: [require('./intro.component.css')]
})
export class IntroComponent {
  private counterCode: string;
  constructor() {
    this.counterCode = counterCode;
  }
}
