import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICart } from 'src/app/models/cart';
import { IProductDetails } from 'src/app/models/productDetails';
import { IProductInCart } from 'src/app/models/productsInCart';
import { ShopService } from 'src/app/services/shop.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() isClickable: boolean = true;
  @Input() shippingFee: number = 0;
  @Output() theButtonWasClicked = new EventEmitter();
  isHidden: boolean = true;
  editSave: string = 'Edit';
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
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    // this.cartItems = this.shopService.getCart();
    // this.totalPrice = this.shopService.getTotalPrice();
    // this.shopService.getCart2().subscribe({
    //   next: (response) => {
    //     console.log('stepper:');
    //     console.log(response);
    //     this.cart = response;
    //   }
    // })
    this.shopService.getCart2().subscribe({
      next: (response) => {
        this.cart = response;
      }
    })
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
        })
      }
    })
  }

  handleClickedButton() {
    this.theButtonWasClicked.emit();
  }

  editButtonClicked() {
    if (this.isHidden) {
      this.isHidden = false;
      this.editSave = 'Save';
    }
    else {
      this.isHidden = true;
      this.editSave = 'Edit';
    }
  }
}
