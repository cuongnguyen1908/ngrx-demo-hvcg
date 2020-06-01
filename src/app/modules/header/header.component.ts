import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartCount$ = this.store.pipe(
    select(cart => cart.products.cart
      .map(item => item.quantity)
      .reduce((acc, cur) => acc + cur, 0))
  );
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

}
