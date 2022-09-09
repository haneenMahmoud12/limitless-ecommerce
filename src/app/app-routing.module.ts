import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productDetails',
    component: ProductsDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product-listing',
    component: ProductListingComponent
  },
  {
    path: 'payment-methods',
    component: PaymentMethodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
