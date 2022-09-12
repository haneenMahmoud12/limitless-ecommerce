import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {
  paymentMethod: string = "Payments.CashOnDelivery";
  buttonText: string = "Continue to Summary";
  isClickable: boolean = false;
  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.choosePayment();
  }
  choosePayment() {
    this.shopService.payment(this.paymentMethod).subscribe({
      next: (response) => {
        console.log("payment: " + response.message);

      }
    })
  }

  radioButtonClicked(clickable: boolean) {
    this.isClickable = clickable;
  }

  handleClick() {
    this.router.navigate([`summary/${this.route.snapshot.params['addressId']}`]);
  }

}
