import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // encapsulation: ViewEncapsulation.None,
  // // use global css without encapsulation
  // encapsulation: ViewEncapsulation.Emulated,
  // // angular creates shimmed css
  // encapsulation: ViewEncapsulation.Native,
  // // angular uses shadow roots
})
export class AppComponent {
  title = 'stock-market';
}
