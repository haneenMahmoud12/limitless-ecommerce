import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/cart';
import { IProduct } from 'src/app/models/product';
import { IProductDetails } from 'src/app/models/productDetails';
import { IProductInCart } from 'src/app/models/productsInCart';
import { ShopService } from 'src/app/services/shop.service';

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
    this.shopService.getCart2().subscribe({
      next: (response) => {
        this.cart = response;
      }
    });

  }

  handleClick() {
    this.router.navigate(['shipping']);
  }

  update(product: IProductInCart, quantity: number) {
    let temp = product.quantity + quantity;
    if (temp < 0)
      temp = 0;
    this.shopService.updateCart(product.id, temp).subscribe({
      next: (response) => {
        this.shopService.getCart2().subscribe({
          next: (response) => {
            this.cart = response;
          }
        });
        // console.log(response);
        // localStorage.setItem("cachedCart", JSON.stringify(this.shopService.getCart()));
      }
    })
  }

  disableButton(): boolean {
    if (this.cart.message != "your shopping cart is empty")
      return false;
    else
      return true;
  }

}
