import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './checkout/carts/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { StepperComponent } from './checkout/stepper/stepper.component';
import { ShippingComponent } from './checkout/shipping/shipping.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
