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
import { FooterComponent } from './footer/footer.component';
import { ShopByCategoryComponent } from './shop-by-category/shop-by-category.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedCategory1Component,
    FooterComponent,
    ShopByCategoryComponent,
    ProductListingComponent,
    PaymentMethodsComponent
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
