import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  @Input() page: string = '';
  formModal1: any;
  formModal2: any;

  addresses: {
    residence: string,
    address: string,
    phone: string
  }[] = [
      {
        residence: 'Office',
        address: 'El-Sadat, Zawya Abou Muslim, Al Haram,Giza Governorate',
        phone: '+20 112 190 1909'
      },
      {
        residence: 'Home',
        address: '12 Ahmed El-Samman, Makram Ebeid, Nasr City',
        phone: '+20 112 190 1909'
      }
    ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formModal1 = new window.bootstrap.Modal(
      document.getElementById('AddAddressModal')
    );
    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('EditAddressModal')
    );
  }

  openFormModal1() {
    this.formModal1.show();
  }

  saveAddress1() {
    // confirm or save something
    this.formModal1.hide();
  }

  openFormModal2() {
    this.formModal2.show();
  }

  saveAddress2() {
    // confirm or save something
    this.formModal2.hide();
  }

  handleClick() {
    this.router.navigate(['summary']);
  }
}
