import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrder } from 'src/app/models/order';
import { ITOResponse } from 'src/app/models/trackOrderResponse';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  orderNumber: number = 0;
  confirmedOrder: IOrder = {
    data: {
      orderNumber: 0,
      orderTotal: 0,
      products: []
    },
    message: '',
    errorList: []
  };
  hideTrackOrderPage: boolean = true;
  hideDiv: boolean = false;
  // orderNumber: number = this.activatedRoute.snapshot.params['orderNumber'];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.placeOrder().subscribe({
      next: (response) => {
        this.confirmedOrder = response;
        this.orderNumber = response.data.orderNumber;
      }
    })
  }

  trackOrderClicked() {
    this.router.navigate([`trackOrder/${this.orderNumber}`]);
    this.hideTrackOrderPage = false;
    this.hideDiv = true;
  }

  handleClick() {
    this.router.navigate(['']);
  }

}
