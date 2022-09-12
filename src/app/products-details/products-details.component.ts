import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ICartItem } from 'src/app/models/cartItem';
import { ILoginData } from 'src/app/models/loginData';
import { IProductDetails } from 'src/app/models/productDetails';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShopService } from 'src/app/services/shop.service';
import { ICart } from '../models/cart';
import { IResponse } from '../models/response';
import { ProductsService } from '../services/products.service';

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
      name: '',
      shortDescription: '',
      oldPrice: null,
      price: '',
      priceValue: 0,
      imageUrl: '',
      hasDiscount: true,
      discountPercentage: 0,
      isMonthlySubscription: null,
      currency: 'EGP'
    },
    message: '',
    errorList: []
  };
  // cart: ICart = {
  //   data: {
  //     products: [],
  //     oneTimeSubTotal: '',
  //     monthlySubTotal: '',
  //     discountAmount: '',
  //     discountCoupon: null,
  //     totalPrice: ''
  //   },
  //   message: '',
  //   errorList: []
  // };
  quantity: number = 1;
  disableButton: boolean = false;
  attributeValues: {
    attributeTypeId: number,
    valueRaw: string,
    colorSquaresRgb: null,
    customProperties: {}
  }[] = [];
  constructor(private shopService: ShopService, private auth: AuthenticationService, private router: ActivatedRoute,
    private productService: ProductsService) { }

  ngOnInit(): void {
    // this.cart = this.shopService.getCart2();
    // this.shopService.getCart2().subscribe({
    //   next: (response) => {
    //     console.log('productDetails:');
    //     console.log(response);
    //     this.cart = response;
    //   }
    // })
    this.finalPrice();
    this.displayProducts(this.router.snapshot.params['id']);
  }

  handleClick() {
    this.product.data.addToCart = {
      id: this.product.data.id,
      quantity: this.quantity,
      isMonthly: false,
      cartId: 0
    };
    this.shopService.addToCart(this.product.data.addToCart.id, this.product.data.addToCart.quantity).subscribe({
      next: (response) => {
        alert(response.message);
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

  public displayProducts(id: number) {
    this.productService.getProducts(id).subscribe({
      next: (response) => {
        this.product = response;
        console.log(this.product);

      }
    })
  }

  public displayAttribute(attributeId: number) {
    console.log(attributeId);

    for (let attribute of this.product.data.attributes) {
      if (attribute.id == attributeId)
        this.attributeValues = attribute.values;
    }
  }
}
