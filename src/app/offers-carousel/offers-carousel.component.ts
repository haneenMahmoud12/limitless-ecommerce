import { Component, Input, OnInit } from '@angular/core';
import { IOffer } from '../models/offers';
import { AuthenticationService } from '../services/authentication.service';
import { ShopService } from '../services/shop.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offers-carousel',
  templateUrl: './offers-carousel.component.html',
  styleUrls: ['./offers-carousel.component.css']
})
export class OffersCarouselComponent implements OnInit {
  imgs: string[] = ['/assets/brett-jordan-rJVflgqasr4-unsplash.jpg',
    '/assets/christina-victoria-craft-ZHys6xN7sUE-unsplash.jpg',
    '/assets/nora-topicals-IbfC88l5u8c-unsplash.jpg'];
  indicators = true;
  currentIndex = 0;
  offers: IOffer[] = [
    {
      title: `Buy 1 Get 20 % off on the second`,
      img: `/assets/pill.jpg`
    },
    {
      title: `Buy 1 Get 1 FREE`,
      img: `/assets/pills.jpg`
    },
    {
      title: `20% Discount`,
      img: `/assets/meds.jpg`
    }];
  constructor(private shopService: ShopService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.login().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
  getImg(i: number): void {
    this.currentIndex = i;
  }

}
