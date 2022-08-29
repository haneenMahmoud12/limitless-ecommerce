import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private http: HttpClient) { }

  public getHomePageSliderImgs(params?: string) {
    return this.http.get(`https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/HomePageSlider`);
  }
}
