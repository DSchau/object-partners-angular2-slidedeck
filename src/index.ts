import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SlideDeckModule } from './slide-deck/slide-deck.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic()
    .bootstrapModule(SlideDeckModule);
}

if ( document.readyState === 'complete' ) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
