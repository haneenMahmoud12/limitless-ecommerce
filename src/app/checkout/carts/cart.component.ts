import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { IProductDetails } from 'src/app/models/productDetails';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  cartItems: IProductDetails[] = [{
    data: {
      pictureModels: [],
      productTags: [],
      productManufacturers: [],
      attributes: [],
      offerExpiryMessage: '',
      categoryName: '',
      fullDescription: '',
      addToCart: {
        id: 0,
        quantity: 1,
        isMonthly: false,
        cartId: 0
      },
      id: 0,
      name: 'Limitless Woman Max',
      shortDescription: '',
      oldPrice: null,
      price: '150',
      priceValue: 120,
      imageUrl: 'assets/limitless-woman-max.png',
      hasDiscount: true,
      discountPercentage: 20,
      isMonthlySubscription: null,
      currency: 'EGP'
    },
    message: '',
    errorList: []
  },
  {
    data: {
      pictureModels: [],
      productTags: [],
      productManufacturers: [],
      attributes: [],
      offerExpiryMessage: '',
      categoryName: '',
      fullDescription: '',
      addToCart: {
        id: 1,
        quantity: 3,
        isMonthly: false,
        cartId: 0
      },
      id: 1,
      name: 'Limitless Max',
      shortDescription: '',
      oldPrice: null,
      price: '150',
      priceValue: 150,
      imageUrl: 'assets/limitless1.jpg',
      hasDiscount: false,
      discountPercentage: 0,
      isMonthlySubscription: null,
      currency: 'EGP'
    },
    message: '',
    errorList: []
  }];
  constructor(private router: Router, private shopService: ShopService) { }

  ngOnInit(): void {
    this.cartItems = this.shopService.getCart();
    this.totalPrice = this.shopService.getTotalPrice();
  }

  handleClick() {
    this.router.navigate(['shipping']);
  }

  increment(id: number) {
    for (let item of this.cartItems) {
      if (item.data.id == id) {
        item.data.addToCart.quantity++;
        this.totalPrice += item.data.priceValue;
        localStorage.setItem("cachedCart", JSON.stringify(this.cartItems));
        localStorage.setItem("totalPrice", "" + this.totalPrice);
        break;
      }
    }

  }

  decrement(id: number) {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].data.id == id && this.cartItems[i].data.addToCart.quantity == 1) {
        this.totalPrice -= this.cartItems[i].data.priceValue;
        this.cartItems.splice(i, 1);
        break;
      }
      if (this.cartItems[i].data.id == id && this.cartItems[i].data.addToCart.quantity > 1) {
        this.totalPrice -= this.cartItems[i].data.priceValue;
        this.cartItems[i].data.addToCart.quantity--;
        break;
      }
    }
    localStorage.setItem("cachedCart", JSON.stringify(this.cartItems));
    localStorage.setItem("totalPrice", "" + this.totalPrice);
  }

}
