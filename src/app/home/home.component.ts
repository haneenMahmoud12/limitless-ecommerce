import { Component, OnInit } from '@angular/core';
import { ILoginData } from '../models/loginData';
import { ProductsService } from '../services/products.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginData: ILoginData = {
    data: {
      accessToken: '',
      isGuest: true
    },
    message: '',
    errorList: []
  };
  constructor(private productService: ProductsService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.login().subscribe({
      next: (response) => {
        this.loginData = response;
        // this.auth.setUserToken(this.loginData.data.accessToken);
        localStorage.setItem('currentUser', JSON.stringify(this.loginData));
        // console.log(localStorage.getItem('currentUser'));
        // console.log(this.loginData);
        //this.displayProducts();
      }
    })

    // this.productService.getOffersCategories().subscribe({
    //   next: (response) => {
    //     console.log(response);

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

}
