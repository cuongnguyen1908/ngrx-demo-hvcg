import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  total$ = this.store.pipe(
    select(cart => cart.products.cart.map(cartItem => cartItem.price * cartItem.quantity)), map(x => x.reduce((acc, curr) => acc + curr, 0))
  );
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {

  }

}
