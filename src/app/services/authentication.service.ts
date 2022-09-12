import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAddress } from '../models/address';
import { IBilling } from '../models/IBillingResponse';
import { ILoginData } from '../models/loginData';
import { IUpdateResponse } from '../models/updateResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userToken = new BehaviorSubject<string | null>(JSON.parse(localStorage.getItem('currentUserToken') || '{}'));

  constructor(private http: HttpClient) { }
  ///LOGIN


  getUserToken(): BehaviorSubject<string | null> {
    return this.userToken;
  }
  setUserToken(token: string): void {
    this.userToken.next(token);
  }


  public login() {
    const modifiedHeader = {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklkIjoiMTk2NzEiLCJMYW5ndWFnZSI6IjAiLCJuYmYiOjE2NDAwOTM3ODgsImV4cCI6MTY0MDE4MDE4OH0.mbfB02zf6MMI0Urk78JooZtHoOmKkdcNBLHkeeQnwbo`
    }
    return this.http.post<ILoginData>('https://limit-lessstaging.azurewebsites.net/webapi2/Customer/login',
      {
        "osVersion": "12",
        "os": "android",
        "isGuest": true,
        "phone": "01273592309",
        "language": 1,
        "deviceToken": "cqrelbKdQR-96qfZTLoHzh:APA91bHXI_vru3r8Be53S8tK97jyi2Sl0GBj6r_AmNxPO0BbZnzjcYX5mAeoFJPV72ISfeGuOiBuF0V6q_A_x0BIjKvkWmUqgqwIApq4uwX4OTKmZcNjPws-4NDPasEm9COHnaTAU6yQ"
      },
      {
        headers: new HttpHeaders(modifiedHeader)
      });
  }

  public addAddress(formData: any) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.post<IUpdateResponse>('https://limit-lessstaging.azurewebsites.net/webapi2/CustomerAddress/AddAddress', formData,
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  public getAddress() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IAddress>('https://limit-lessstaging.azurewebsites.net/webapi2/CustomerAddress/Addresses',
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  public editAddress(formData: any) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.put<IUpdateResponse>('https://limit-lessstaging.azurewebsites.net/webapi2/CustomerAddress/AddressEdit', formData,
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  // 
  public billingAddress(addressId: number) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IBilling>(`https://limit-lessstaging.azurewebsites.net/webapi2/Order/SelectBillingAddress/${addressId}`,
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }
}
