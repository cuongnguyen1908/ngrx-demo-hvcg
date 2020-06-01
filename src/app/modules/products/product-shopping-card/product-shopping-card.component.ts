import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../../store/app.reducer';
@Component({
  selector: 'app-product-shopping-card',
  templateUrl: './product-shopping-card.component.html',
  styleUrls: ['./product-shopping-card.component.scss']
})
export class ProductShoppingCardComponent implements OnInit {
  cartList$ = this.store.pipe(
    select(cartList => cartList.products.cart));

    // list$ = this.cartList$.pipe(map(item => console.log(item)));

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

}
