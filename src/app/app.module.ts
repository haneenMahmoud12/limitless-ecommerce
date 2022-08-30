import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturedCategory1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,

    useClass: AuthTokenInterceptor,

    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
