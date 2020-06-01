import { ProductListComponent } from './product-list/product-list.component';
import { ProductShoppingCardComponent } from './product-shopping-card/product-shopping-card.component';
import { ProductComponent } from './product.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    pathMatch: 'full',
    children: [
      { path: '', component: ProductListComponent, pathMatch: 'full' },
    ],
  },
  { path: 'card', component: ProductShoppingCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
