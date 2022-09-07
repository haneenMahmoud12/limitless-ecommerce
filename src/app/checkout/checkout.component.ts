import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILoginData } from '../models/loginData';
import { IProduct } from '../models/product';
import { ProductsService } from '../products/services/products.service';
import { AuthenticationService } from '../services/authentication.service';
// import { StepperModule } from 'cdbangular';

// declare var window: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // formModal: any;

  loginData: ILoginData = {
    data: {
      accessToken: '',
      isGuest: true
    },
    message: '',
    errorList: []
  };

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
    // this.auth.login().subscribe({
    //   next: (response) => {
    //     this.loginData = response;
    //     // this.auth.setUserToken(this.loginData.data.accessToken);
    //     localStorage.setItem('currentUser', JSON.stringify(this.loginData));
    //     console.log(localStorage.getItem('currentUser'));

    //     // console.log(this.loginData);
    //   }
    // })

  }
  public displayProducts() {
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }

  handleClick() {
    this.displayProducts();
  }
}
