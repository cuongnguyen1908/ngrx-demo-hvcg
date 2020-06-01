import { Product } from 'src/app/shared/models/products/product.model';
import { LoadProducts } from './../store/product.actions';
import { map, take, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as ProductActions from '../store/product.actions';
import { Observable } from 'rxjs';
// import * as fromProduct

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   list$ = this.store.pipe(
     select(productList => productList.products.productList)
   );
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {


    this.store.dispatch(new ProductActions.LoadProducts());

  }

}
