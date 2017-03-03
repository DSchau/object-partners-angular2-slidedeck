import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-playground',
  templateUrl: './component-playground.component.pug'
})
export class ComponentPlayground {
  @Input()
  code: string;
}
