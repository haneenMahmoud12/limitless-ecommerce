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
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUser')) {
      this.auth.login().subscribe({
        next: (response) => {
          console.log(response);

          this.loginData = response;
          localStorage.setItem('currentUser', JSON.stringify(this.loginData));
        }
      })
    }
  }
}
