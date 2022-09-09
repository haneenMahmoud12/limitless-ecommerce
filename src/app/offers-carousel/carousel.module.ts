import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersCarouselComponent } from './offers-carousel.component';



@NgModule({
  declarations: [
    OffersCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OffersCarouselComponent
  ]
})
export class CarouselModule { }
