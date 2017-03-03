// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { SlideDeckModule } from './slide-deck/slide-deck.module';

// // depending on the env mode, enable prod mode or add debugging modules
// if (process.env.ENV === 'build') {
//   enableProdMode();
// }

export function main() {
  return platformBrowserDynamic()
    .bootstrapModule(SlideDeckModule);
}

if ( document.readyState === 'complete' ) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
