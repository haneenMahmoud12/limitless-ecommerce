import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from '../models/cart';
import { ILoginData } from '../models/loginData';
import { IProductDetails } from '../models/productDetails';
import { IResponse } from '../models/response';
import { IUpdateResponse } from '../models/updateResponse';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private cart: IProductDetails[] = JSON.parse(localStorage.getItem("cachedCart") || "[]");

  private totalPrice: number = +(localStorage.getItem("totalPrice") || "0");
  constructor(private http: HttpClient) { }

  // public getHomePageSliderImgs(params?: string) {
  //   const modifiedHeader = {
  //     Authorization: `Bearer ${params}`
  //   }
  //   return this.http.get(`https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/HomePageSlider`, {
  //     headers: new HttpHeaders(modifiedHeader)
  //   });
  // }

  public getCart(): IProductDetails[] {
    return this.cart;
  }
  public getTotalPrice(): number {
    return this.totalPrice;
  }
  public setTotalPrice(price: number): void {
    this.totalPrice = price;
    localStorage.setItem("totalPrice", "" + this.totalPrice);
  }
  public addToCart(product: IProductDetails) {
    this.cart.push(product);
    this.totalPrice += (product.data.priceValue) * (product.data.addToCart.quantity);
    localStorage.setItem("cachedCart", JSON.stringify(this.cart));
    localStorage.setItem("totalPrice", "" + this.totalPrice);

    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.post<IResponse>('https://limit-lessstaging.azurewebsites.net/webapi2/Cart/AddToCart',
      {
        "id": product.data.addToCart.id,
        "quantity": product.data.addToCart.quantity
      },
      {
        headers: new HttpHeaders(modifiedHeader)
      });
  }

  public removeFromCart(productId: number): void {
    this.cart = this.cart.filter((product) => {
      if (product.data.id === productId) {
        this.totalPrice -= (product.data.priceValue) * (product.data.addToCart.quantity);
        // return false;
      }
      // else
      //   return true;
    })
    localStorage.setItem("cachedCart", JSON.stringify(this.cart));
    localStorage.setItem("totalPrice", "" + this.totalPrice);

  }

  public getCart2() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<ICart>('https://limit-lessstaging.azurewebsites.net/webapi2/Cart/GetCart',
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  public updateCart(id: number, quantity: number) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.put<IUpdateResponse>('https://limit-lessstaging.azurewebsites.net/webapi2/Cart/UpdateCart/',
      {
        "id": id,
        "quantity": quantity,
        "isMonthly": false
      },
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }
}
