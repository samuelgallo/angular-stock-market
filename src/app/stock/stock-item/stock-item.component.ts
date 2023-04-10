import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  // styles: [
  //   `
  //     .stock-container {
  //       border: 1px solid black;
  //     }
  //     .positive {
  //       color: green;
  //     }
  //   `,
  // ],
})
// @Component({
//   selector: 'app-sock-item',
//   template: `<div class="stock-container">
//     <div class="name">{{ stock.name + ' (' + stock.code + ' )' }}</div>
//     <div
//       class="price"
//       [class]="stock.isPositiveChange() ? 'positive' : 'negative'"
//     >
//       $ {{ stock.price }}
//     </div>
//     <button (click)="toggleFavorite($event)" *ngIf="!stock.favorite">
//       Add to Favorite
//     </button>
//   </div>`,
//   styleUrls: ['./stock-item.component.css'],
// })
// export class StockItemComponent implements OnInit {
//   // public name!: string;
//   // public code!: string;
//   // public price!: number;
//   // public previousPrice!: number;
//   // public positiveChange!: boolean;
//   // public favorite!: boolean;

//   public stock!: Stock;
//   public stockClasses: any;
//   public stockStyles: any;

//   public stocks!: Array<Stock>;

//   constructor() {}

//   ngOnInit() {
//     // this.name = 'Test Stock Company';
//     // this.code = 'TSC';
//     // this.price = 85;
//     // this.previousPrice = 80;
//     // this.positiveChange = this.price >= this.previousPrice;
//     // this.favorite = false;
//     this.stock = new Stock('Test Stock Company', 'TSC', 85, 90);

//     this.stocks = [
//       new Stock('Test Stock Company', 'TSC', 85, 80),
//       new Stock('Second Stock Company', 'SSC', 10, 20),
//       new Stock('Last Stock Company', 'LSC', 876, 765),
//     ];

//     let diff = this.stock.price / this.stock.previousPrice - 1;
//     let largeChange = Math.abs(diff) > 0.01;
//     this.stockClasses = {
//       positive: this.stock.isPositiveChange(),
//       negative: !this.stock.isPositiveChange(),
//       'large-change': largeChange,
//       'small-change': !largeChange,
//     };
//     this.stockStyles = {
//       color: this.stock.isPositiveChange() ? 'green' : 'red',
//       'font-size': largeChange ? '1.2em' : '0.8em',
//     };
//   }

//   // toggleFavorite(event: Event) {
//   //   console.log(
//   //     'We are toggling the favorite state for this stock',
//   //     event.preventDefault
//   //   );
//   //   this.stock.favorite = !this.stock.favorite;
//   // }
//   toggleFavorite(event: Event, index: any) {
//     console.log(
//       'We are toggling the favorite state for this stock',
//       index,
//       event
//     );
//     this.stocks[index].favorite = !this.stocks[index].favorite;
//   }

//   trackStockByCode(index: any, stock: Stock) {
//     return stock.code;
//   }
// }
export class StockItemComponent {
  @Input() public stocks!: Stock;
  @Output() private toggleFavorite!: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  onToggleFavorite(event: Event) {
    this.toggleFavorite.emit(this.stocks);
  }
}
