import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './checkout/carts/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { StepperComponent } from './checkout/stepper/stepper.component';
import { ShippingComponent } from './checkout/shipping/shipping.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';
import { OffersPageComponent } from './offers-page/offers-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'productDetails/:id',
    component: ProductsDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
  {
    path: 'summary',
    component: OrderSummaryComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'product-listing/:id',
    component: ProductListingComponent
  },
  {
    path: 'payment-methods',
    component: PaymentMethodsComponent
  },
  {
    path: 'offer/:id',
    component: OffersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
