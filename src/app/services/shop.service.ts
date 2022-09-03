import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginData } from '../models/loginData';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient) { }

  public getHomePageSliderImgs(params?: string) {
    const modifiedHeader = {
      Authorization: `Bearer ${params}`
    }
    return this.http.get(`https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/HomePageSlider`, {
      headers: new HttpHeaders(modifiedHeader)
    });
  }
}
