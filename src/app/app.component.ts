import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  preserveWhitespaces: false,

  // encapsulation: ViewEncapsulation.None,
  // // use global css without encapsulation
  // encapsulation: ViewEncapsulation.Emulated,
  // // angular creates shimmed css
  // encapsulation: ViewEncapsulation.Native,
  // // angular uses shadow roots
})
export class AppComponent implements OnInit {
  title = 'stock-market';

  //public stockObj!: Stock;
  public stocks!: Stock;
  public $vent!: Stock;

  ngOnInit(): void {
    this.stocks = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  onToggleFavorite(stocks: Stock) {
    console.log('Favorite for stock ', stocks, ' was triggered');
    this.stocks.favorite = !this.stocks.favorite;
  }
}
