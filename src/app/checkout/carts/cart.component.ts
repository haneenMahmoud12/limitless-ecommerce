import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/cart';
import { IProduct } from 'src/app/models/product';
import { IProductDetails } from 'src/app/models/productDetails';
import { ShopService } from 'src/app/services/shop.service';

interface IProductInCart {
  "id": number,
  "name": string,
  "shortDescription": string,
  "imageUrl": string,
  "quantity": number,
  "oldPrice": null,
  "currentPrice": number,
  "isMonthly": boolean,
  "unitPrice": string,
  "subTotalPrice": string,
  "shoppingCartItemId": number,
  "isMonthlySubscription": null,
  "currency": string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // totalPrice: number = 0;
  // cartItems: IProductDetails[] = [{
  //   data: {
  //     pictureModels: [],
  //     productTags: [],
  //     productManufacturers: [],
  //     attributes: [],
  //     offerExpiryMessage: '',
  //     categoryName: '',
  //     fullDescription: '',
  //     addToCart: {
  //       id: 0,
  //       quantity: 1,
  //       isMonthly: false,
  //       cartId: 0
  //     },
  //     id: 0,
  //     name: 'Limitless Woman Max',
  //     shortDescription: '',
  //     oldPrice: null,
  //     price: '150',
  //     priceValue: 120,
  //     imageUrl: 'assets/limitless-woman-max.png',
  //     hasDiscount: true,
  //     discountPercentage: 20,
  //     isMonthlySubscription: null,
  //     currency: 'EGP'
  //   },
  //   message: '',
  //   errorList: []
  // },
  // {
  //   data: {
  //     pictureModels: [],
  //     productTags: [],
  //     productManufacturers: [],
  //     attributes: [],
  //     offerExpiryMessage: '',
  //     categoryName: '',
  //     fullDescription: '',
  //     addToCart: {
  //       id: 1,
  //       quantity: 3,
  //       isMonthly: false,
  //       cartId: 0
  //     },
  //     id: 1,
  //     name: 'Limitless Max',
  //     shortDescription: '',
  //     oldPrice: null,
  //     price: '150',
  //     priceValue: 150,
  //     imageUrl: 'assets/limitless1.jpg',
  //     hasDiscount: false,
  //     discountPercentage: 0,
  //     isMonthlySubscription: null,
  //     currency: 'EGP'
  //   },
  //   message: '',
  //   errorList: []
  // }];
  cart: ICart = {
    data: {
      products: [],
      oneTimeSubTotal: '',
      monthlySubTotal: '',
      discountAmount: '',
      discountCoupon: null,
      totalPrice: ''
    },
    message: '',
    errorList: []
  };
  constructor(private router: Router, private shopService: ShopService) { }

  ngOnInit(): void {
    // this.cartItems = this.shopService.getCart();
    // this.totalPrice = this.shopService.getTotalPrice();
    this.shopService.getCart2().subscribe({
      next: (response) => {
        // console.log(response);
        this.cart = response;
      }
    })
  }

  handleClick() {
    this.router.navigate(['shipping']);
  }

  increment(id: number) {
    // for (let item of this.cart.data.products) {
    //   if (item.id == id) {
    //     item.quantity++;
    //     this.cart.data.oneTimeSubTotal += item.currentPrice;
    //     this.cart.data.totalPrice += item.currentPrice;
    //     item.data.addToCart.quantity++;
    //     this.totalPrice += item.data.priceValue;
    //     localStorage.setItem("cachedCart", JSON.stringify(this.cartItems));
    //     localStorage.setItem("totalPrice", "" + this.totalPrice);
    //     break;
    //   }
    // }

  }

  decrement(id: number) {
    // for (let i = 0; i < this.cartItems.length; i++) {
    //   if (this.cartItems[i].data.id == id && this.cartItems[i].data.addToCart.quantity == 1) {
    //     this.totalPrice -= this.cartItems[i].data.priceValue;
    //     this.cartItems.splice(i, 1);
    //     break;
    //   }
    //   if (this.cartItems[i].data.id == id && this.cartItems[i].data.addToCart.quantity > 1) {
    //     this.totalPrice -= this.cartItems[i].data.priceValue;
    //     this.cartItems[i].data.addToCart.quantity--;
    //     break;
    //   }
    // }
    // localStorage.setItem("cachedCart", JSON.stringify(this.cartItems));
    // localStorage.setItem("totalPrice", "" + this.totalPrice);
  }

  update(product: IProductInCart, quantity: number) {
    let temp = product.quantity + quantity;
    if (temp < 0)
      temp = 0;
    this.shopService.updateCart(product.id, temp).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

}
