import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/models/order';
import { ICart } from '../../models/cart';
import { ITOResponse } from '../../models/trackOrderResponse';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {
  // orderNumber: number = 0;
  // @Input() confirmedOrder: IOrder = {
  //   data: {
  //     orderNumber: 0,
  //     orderTotal: 0,
  //     products: []
  //   },
  //   message: '',
  //   errorList: []
  // };
  orderHistory: ITOResponse = {
    data: [],
    message: '',
    errorList: []
  };
  trackOrder: {
    "id": number,
    "orderNumber": number,
    "totalPrice": string,
    "orderStatus": string,
    "orderStatusInt": number,
    "date": string,
    "currency": string
  } = {
      id: 0,
      orderNumber: 0,
      totalPrice: '',
      orderStatus: '',
      orderStatusInt: 0,
      date: '',
      currency: ''
    };
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
  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shopService.trackOrder().subscribe({
      next: (response) => {
        this.orderHistory = response;
        for (let order of this.orderHistory.data) {
          if (order.orderNumber == this.route.snapshot.params['orderNumber']) {
            this.trackOrder = order;
            break;
          }
          else
            this.orderHistory.data.pop();
        }
      }
    })
    // this.shopService.getCart2().subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.cart = response;
    //   }
    // })
  }

  handleClick(orderId: number) {
    this.shopService.cancelOrder(orderId).subscribe({
      next: (response) => {
        console.log(response);

        if (response.message == "Success")
          alert(`Order # ${this.trackOrder.orderNumber} is cancelled.`);
        else
          alert(`${response.errorList}
                please try again.`);

        this.shopService.trackOrder().subscribe({
          next: (response) => {
            this.orderHistory = response;
            for (let order of this.orderHistory.data) {
              if (order.orderNumber == this.route.snapshot.params['orderNumber']) {
                this.trackOrder = order;
                break;
              }
              else
                this.orderHistory.data.pop();
            }
          }
        })
      }
    })
  }

  disableCancel(): boolean {
    if (this.trackOrder.orderStatus == 'Cancelled')
      return true;
    else
      return false;
  }

}
