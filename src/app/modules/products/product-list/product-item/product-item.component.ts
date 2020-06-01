import { AddToCart } from './../../store/product.actions';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shared/models/products/product.model';
import { Component, OnInit, Input } from '@angular/core';
import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }


  onAddToCard(product: Product) {
    this.store.dispatch(new AddToCart({name: product.name, price: product.price}));
  }
}
