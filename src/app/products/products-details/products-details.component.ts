import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ICartItem } from 'src/app/models/cartItem';
import { ILoginData } from 'src/app/models/loginData';
import { IProduct } from 'src/app/models/product';
import { IProductDetails } from 'src/app/models/productDetails';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  loginData: ILoginData = {
    data: {
      accessToken: '',
      isGuest: true
    },
    message: '',
    errorList: []
  };
  product: IProductDetails = {
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
        quantity: 0,
        isMonthly: false,
        cartId: 0
      },
      id: 0,
      name: 'Limitless Woman Max',
      shortDescription: '',
      oldPrice: null,
      price: '150',
      priceValue: 0,
      imageUrl: 'assets/limitless-woman-max.png',
      hasDiscount: true,
      discountPercentage: 20,
      isMonthlySubscription: null,
      currency: 'EGP'
    },
    message: '',
    errorList: []
  };
  cart: IProductDetails[] = [];
  quantity: number = 1;
  disableButton: boolean = false;
  // productDetails: IProduct = {
  //   id: 0,
  //   img: 'assets/limitless-woman-max.png',
  //   name: 'Limitless Woman Max',
  //   capsules: 30,
  //   price: 150,
  //   tagOffer: 20
  // }
  constructor(private shopService: ShopService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    // this.auth.login().subscribe({
    //   next: (response) => {
    //     this.loginData = response;
    //     this.auth.setUserToken(this.loginData.data.accessToken);
    //     localStorage.setItem('currentUser', JSON.stringify(this.loginData));
    //     console.log(localStorage.getItem('currentUser'));
    //     console.log(this.loginData);
    //   }
    // })
    this.cart = this.shopService.getCart();
    this.finalPrice();
  }

  handleClick() {
    const cartItem: ICartItem = {
      id: this.product.data.id,
      quantity: this.quantity,
      isMonthly: false,
      cartId: 0
    }
    this.product.data.addToCart = cartItem;
    this.shopService.addToCart(this.product).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  increment() {
    this.quantity++;
    // this.product.data.addToCart.quantity = this.quantity;
  }

  decrement() {
    if (this.quantity > 1)
      this.quantity--;
    else
      this.disableButton = true;
    // this.product.data.addToCart.quantity = this.quantity;
  }

  finalPrice() {
    this.product.data.priceValue = parseInt(this.product.data.price) * (100 - (this.product.data.discountPercentage)) / 100;
  }
}
