import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffersCarouselComponent } from './offers-carousel/offers-carousel.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from './offers-carousel/carousel.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeaturedCategory1Component } from './featured-category1/featured-category1.component';
import { SharedModule } from './shared/shared.module';
import { AuthTokenInterceptor } from './auth-token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StepperComponent } from './checkout/stepper/stepper.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShippingComponent } from './checkout/shipping/shipping.component';
import { OrderSummaryComponent } from './checkout/order-summary/order-summary.component';
import { CartComponent } from './checkout/carts/cart.component';
import { StepsComponent } from './checkout/steps/steps.component';
import { ConfirmationComponent } from './checkout/confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedCategory1Component,
    StepperComponent,
    CartComponent,
    CheckoutComponent,
    ShippingComponent,
    OrderSummaryComponent,
    StepsComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,

    useClass: AuthTokenInterceptor,

    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
