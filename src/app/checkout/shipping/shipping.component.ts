import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAddress } from 'src/app/models/address';
import { IAddressItem } from 'src/app/models/addressItem';
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  chosenAddressId: number = 0;

  disableButton: boolean = false;

  addressForm: FormGroup = this.fb.group({
    FirstName: ["", Validators.required],
    LastName: ["", Validators.required],
    PhoneNumber: ["", Validators.required],
    Email: ["", Validators.required, Validators.email],
    Title: ["", Validators.required],
    City: ["", Validators.required],
    Area: ["", Validators.required],
    Street: ["", Validators.required],
    BuildingNumber: ["", Validators.required],
    ApartmentNumber: ["", Validators.required],
  })
  savedAddresses: IAddress = {
    data: [],
    message: '',
    errorList: []
  };
  addressToEdit: IAddressItem = {
    id: 0,
    title: '',
    city: '',
    area: '',
    street: '',
    buildingNumber: 0,
    apartmentNumber: 0
  };
  isHidden: boolean = false;

  shippingFee: number = 0;
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.formModal1 = new window.bootstrap.Modal(
      document.getElementById('AddAddressModal')
    );
    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('EditAddressModal')
    );
    this.auth.getAddress().subscribe({
      next: (response) => {
        this.savedAddresses = response;
      }
    })

  }
  openFormModal1() {
    this.formModal1.show();
  }

  saveAddress1() {
    this.auth.addAddress(this.addressForm.getRawValue()).subscribe({
      next: (response) => {
        alert(response.message);
      }
    })
    this.auth.getAddress().subscribe({
      next: (response) => {
        this.savedAddresses = response;
      }
    })
    this.formModal1.hide();
  }

  openFormModal2(addressId: number) {
    for (let address of this.savedAddresses.data) {
      if (address.id == addressId) {
        this.addressToEdit = address;
        break;
      }
    }
    this.formModal2.show();
  }

  saveAddress2() {
    this.auth.addAddress(this.addressForm.getRawValue()).subscribe({
      next: (response) => {
        alert(response.message);
      }
    })
    this.formModal2.hide();
  }

  closeModal1() {
    this.formModal1.hide();
  }

  closeModal2() {
    this.formModal2.hide();
  }

  handleClick() {
    this.router.navigate([`payment-methods/${this.chosenAddressId}`]);
  }

  radioButtonClicked(hide: boolean) {
    this.isHidden = hide;
  }

  chosenAddress(addressId: number) {
    // console.log("id:" + addressId);
    this.chosenAddressId = addressId;
    this.auth.billingAddress(addressId).subscribe({
      next: (response) => {
        this.shippingFee = response.data.delivery;
      }
    });
    this.disableButton = true;
  }
}
