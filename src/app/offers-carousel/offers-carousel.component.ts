import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from '../models/offers';
import { AuthenticationService } from '../services/authentication.service';
import { ShopService } from '../services/shop.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ILoginData } from '../models/loginData';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { IHomeOffers } from '../models/homeOffers';

@Component({
  selector: 'app-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.css']
})
export class OffersCarouselComponent implements OnInit {
  loginData: ILoginData = {
    data: {
      accessToken: '',
      isGuest: false
    },
    message: '',
    errorList: []
  };
  imgs: string[] = ['/assets/brett-jordan-rJVflgqasr4-unsplash.jpg',
    '/assets/christina-victoria-craft-ZHys6xN7sUE-unsplash.jpg',
    '/assets/nora-topicals-IbfC88l5u8c-unsplash.jpg'];
  indicators = true;
  currentIndex = 0;
  offers: IHomeOffers = {
    data: [],
    message: '',
    errorList: []
  };
  constructor(private shopService: ShopService, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    // this.auth.login().subscribe({
    //   next: (response) => {
    //     this.loginData = response;
    //     console.log(this.loginData);
    //   }
    // })
    // this.shopService.getHomePageSliderImgs(this.loginData.data.accessToken).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //   }
    // })

    this.productService.getHomeOffers().subscribe({
      next: (response) => {
        this.offers = response;
      }
    })
  }

  getImg(i: number): void {
    this.currentIndex = i;
  }

  handleClick() {
    this.router.navigate(['productDetails']);
  }
}
