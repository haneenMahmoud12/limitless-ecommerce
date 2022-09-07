import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  formModal: any;

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

  constructor() { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('AddAddressModal')
    );
  }

  openFormModal() {
    this.formModal.show();
  }

  saveAddress() {
    // confirm or save something
    this.formModal.hide();
  }
}
