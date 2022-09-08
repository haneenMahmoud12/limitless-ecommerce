import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/product';
import { IFeaturedCategory } from '../models/featuredCategory';
import { IHomeOffers } from '../models/homeOffers';
import { IOffersSubCategories } from '../models/offersSubCategories';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = [];
  constructor(private http: HttpClient) { }

  public getProducts() {
    let headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    // console.log(accessToken);
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    const params = new HttpParams().set('productId', 193);
    return this.http.get('https://limit-lessstaging.azurewebsites.net/webapi2/Product/ProductDetails', {
      headers: new HttpHeaders(modifiedHeader),
      params
    });
  }

  public getFeaturedCategory() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IFeaturedCategory>('https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/ProductsByCategory/41', {
      headers: new HttpHeaders(modifiedHeader)
    });
  }

  public getHomeOffers() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IHomeOffers>('https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/HomeOffersCategoryProducts', {
      headers: new HttpHeaders(modifiedHeader)
    });
  }

  public getOffersCategories() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IOffersSubCategories>('https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/OffersSubCategories', {
      headers: new HttpHeaders(modifiedHeader)
    });
  }
}
