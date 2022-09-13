import { Component, OnInit } from '@angular/core';
import { ILoginData } from './models/loginData';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'limitless-ecommerce';
  // loginData: ILoginData = {
  //   data: {
  //     accessToken: '',
  //     isGuest: true
  //   },
  //   message: '',
  //   errorList: []
  // };
  constructor(private auth: AuthenticationService) { }

  // ngOnInit(): void {
  //   this.auth.login().subscribe({
  //     next: (response) => {
  //       this.loginData = response;
  //       localStorage.setItem('currentUser', JSON.stringify(this.loginData));
  //     }
  //   })
  // }
}
