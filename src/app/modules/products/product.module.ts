import { PayComponent } from './../pay/pay.component';
import { ProductEffects } from './store/product.effect';
import { EffectsModule } from '@ngrx/effects';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductShoppingCardComponent } from './product-shopping-card/product-shopping-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ProductComponent,
   ProductListComponent,
   ProductItemComponent,
   ProductShoppingCardComponent,
   PayComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductRoutingModule,
    EffectsModule.forFeature([ProductEffects])

  ],
})
export class ProductModule { }
