import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAddress } from 'src/app/models/address';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShopService } from 'src/app/services/shop.service';

declare var window: any;

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input() page: string = '';
  formModal: any;
  // chosenAddress: {
  //   residence: string,
  //   address: string
  // } = {
  //     residence: 'Office',
  //     address: 'El-Sadat, Zawya Abou Muslim, Al Haram,Giza Governorate'
  //   }

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
  chosenAddress: {
    id: number,
    title: string,
    city: string,
    area: string,
    street: string,
    buildingNumber: number,
    apartmentNumber: number
  } = {
      id: 0,
      title: '',
      city: '',
      area: '',
      street: '',
      buildingNumber: 0,
      apartmentNumber: 0
    }


  constructor(private router: Router, private auth: AuthenticationService, private fb: FormBuilder, private activatedRoute: ActivatedRoute,
    private shopService: ShopService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('changeAddressModal')
    );
    this.auth.getAddress().subscribe({
      next: (response) => {
        this.savedAddresses = response;
        this.getChosenAddress();
      }
    })

  }

  openFormModal() {
    this.formModal.show();
  }

  saveAddress() {
    this.auth.addAddress(this.addressForm.getRawValue()).subscribe({
      next: (response) => {
        alert(response.message);
      }
    })
    this.formModal.hide();
  }

  handleClick() {
    // this.shopService.placeOrder().subscribe({
    //   next: (response) => {
    //     this.orderNumber = response.data.orderNumber;
    //   }
    // })
    this.router.navigate([`confirmation`]);
  }

  getChosenAddress() {
    for (let address of this.savedAddresses.data) {
      if (this.activatedRoute.snapshot.params['id'] == address.id)
        this.chosenAddress = address;
    }
  }

}
