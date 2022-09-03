import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  // productImg: string = "assets/limitless-woman-max.png";
  productDetails: IProduct = {
    id: 0,
    img: 'assets/limitless-woman-max.png',
    name: 'Limitless Woman Max',
    capsules: 30,
    price: 150,
    tagOffer: 20
  }
  constructor() { }

  ngOnInit(): void {
  }

}
