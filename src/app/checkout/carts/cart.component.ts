import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: IProduct[] = [
    {
      id: 0,
      img: 'assets/limitless-woman-max.png',
      name: 'Limitless Woman Max',
      capsules: 30,
      price: 150,
      tagOffer: 20
    },
    {
      id: 1,
      img: 'assets/limitless1.jpg',
      name: 'Limitless Max',
      capsules: 30,
      price: 150
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.router.navigate(['shipping']);
  }
}
