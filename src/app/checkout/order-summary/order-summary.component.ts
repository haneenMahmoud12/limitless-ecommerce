import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input() page: string = '';
  formModal: any;
  chosenAddress: {
    residence: string,
    address: string
  } = {
      residence: 'Office',
      address: 'El-Sadat, Zawya Abou Muslim, Al Haram,Giza Governorate'
    }

  addresses: {
    residence: string,
    address: string
  }[] = [
      {
        residence: 'Office',
        address: 'El-Sadat, Zawya Abou Muslim, Al Haram,Giza Governorate'
      },
      {
        residence: 'Home',
        address: '12 Ahmed El-Samman, Makram Ebeid, Nasr City'
      }
    ]
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('changeAddressModal')
    );
  }

  openFormModal() {
    this.formModal.show();
  }

  saveAddress() {
    // confirm or save something
    this.formModal.hide();
  }

  handleClick() {
    this.router.navigate(['confirmation']);
  }

}
