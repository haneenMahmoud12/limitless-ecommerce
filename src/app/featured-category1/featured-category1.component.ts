import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-featured-category1',
  templateUrl: './featured-category1.component.html',
  styleUrls: ['./featured-category1.component.css']
})
export class FeaturedCategory1Component implements OnInit {
  products: IProduct[] = [
    {
      id: 0,
      img: 'assets/limitless-woman-max.png',
      name: 'Limitless C-Zinc Original',
      capsules: 30,
      price: 200
    },
    {
      id: 1,
      img: 'assets/limitless1.jpg',
      name: 'Limitless C-Zinc Original',
      capsules: 30,
      price: 200,
      tagOffer: 0.2
    },
    {
      id: 2,
      img: 'assets/limitless2.png',
      name: 'Limitless C-Zinc Original',
      capsules: 30,
      price: 200,
      tagOffer: 0.2
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
