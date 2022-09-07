import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/product';

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
    console.log(accessToken);

    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    const params = new HttpParams().set('productId', 193);
    return this.http.get('https://limit-lessstaging.azurewebsites.net/webapi2/Product/ProductDetails/:productId', {
      headers: new HttpHeaders(modifiedHeader),
      params
    });
  }
}
