import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILoginData } from '../models/loginData';
import { IProduct } from '../models/product';
import { ProductsService } from '../products/services/products.service';
import { AuthenticationService } from '../services/authentication.service';

declare var window: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  formModal: any;

  loginData: ILoginData = {
    data: {
      accessToken: '',
      isGuest: false
    },
    message: '',
    errorList: []
  };

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

  constructor(private productService: ProductsService, private auth: AuthenticationService) { }
  items: IProduct[] = [
    {
      id: 0,
      img: 'assets/limitless-woman-max.png',
      name: 'Limitless Woman Max',
      capsules: 30,
      price: 150,
      tagOffer: 20
    },
    {
      id: 1,
      img: 'assets/limitless1.jpg',
      name: 'Limitless Max',
      capsules: 30,
      price: 150
    },
    {
      id: 2,
      img: 'assets/limitless2.png',
      name: 'Limitless Tumeric',
      capsules: 30,
      price: 150
    }
  ]
  ngOnInit(): void {
    this.auth.login().subscribe({
      next: (response) => {
        this.loginData = response;
        // this.auth.setUserToken(this.loginData.data.accessToken);
        localStorage.setItem('currentUser', JSON.stringify(this.loginData));
        console.log(localStorage.getItem('currentUser'));

        // console.log(this.loginData);
      }
    })

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('changeAddressModal')
    );
  }
  public displayProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  openFormModal() {
    this.formModal.show();
  }

  saveAddress() {
    // confirm or save something
    this.formModal.hide();
  }

}
