import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'intro-counter',
  templateUrl: './counter.component.pug',
  styles: [require('./counter.component.css')]
})
export class CounterComponent implements OnInit, OnDestroy {
  private now: number;
  private interval: any;
  @Input()
  private customFormatString: string = 'short';

  private formatString: string = this.customFormatString;

  ngOnInit() {
    this.interval = this._handleTick(1000);

    setInterval(this.interval, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  handleChange($event): void {
    this.customFormatString = $event.target.value;
  }

  updateFormatString(customFormatString: string): void {
    this.formatString = customFormatString;
  }

  _handleTick(ms: number): Function {
    this.now = new Date().getTime();
    return () => {
      this.now += ms;
    };
  }
}