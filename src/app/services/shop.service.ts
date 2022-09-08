import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginData } from '../models/loginData';
import { IProductDetails } from '../models/productDetails';

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
    // console.log(accessToken);

    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.post('https://limit-lessstaging.azurewebsites.net/webapi2/Cart/AddToCart',
      {
        "id": 193,
        "quantity": 2
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
}
