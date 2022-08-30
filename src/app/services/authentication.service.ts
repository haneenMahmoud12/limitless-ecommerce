import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  ///LOGIN
  public login() {
    return this.http.post('https://limit-lessstaging.azurewebsites.net/webapi2/Customer/login',
      {
        "osVersion": "12",
        "os": "android",
        "isGuest": true,
        "phone": "01273592309",
        "language": 1,
        "deviceToken": "cqrelbKdQR-96qfZTLoHzh:APA91bHXI_vru3r8Be53S8tK97jyi2Sl0GBj6r_AmNxPO0BbZnzjcYX5mAeoFJPV72ISfeGuOiBuF0V6q_A_x0BIjKvkWmUqgqwIApq4uwX4OTKmZcNjPws-4NDPasEm9COHnaTAU6yQ"
      });
  }
}
