import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICart } from '../models/cart';
import { ILoginData } from '../models/loginData';
import { IOffer } from '../models/offers';
import { IOrder } from '../models/order';
import { IProductDetails } from '../models/productDetails';
import { IResponse } from '../models/response';
import { ITOResponse } from '../models/trackOrderResponse';
import { IUpdateResponse } from '../models/updateResponse';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  // private cart: ICart = JSON.parse(localStorage.getItem("cachedCart") || "[]");
  // private cart: ICart = {
  //   data: {
  //     products: [],
  //     oneTimeSubTotal: '',
  //     monthlySubTotal: '',
  //     discountAmount: '',
  //     discountCoupon: null,
  //     totalPrice: ''
  //   },
  //   message: '',
  //   errorList: []
  // };

  // private totalPrice: number = +(localStorage.getItem("totalPrice") || "0");

  constructor(private http: HttpClient) { }

  // public getHomePageSliderImgs(params?: string) {
  //   const modifiedHeader = {
  //     Authorization: `Bearer ${params}`
  //   }
  //   return this.http.get(`https://limit-lessstaging.azurewebsites.net/webapi2/Catalog/HomePageSlider`, {
  //     headers: new HttpHeaders(modifiedHeader)
  //   });
  // }

  // public getCart(): IProductDetails[] {
  //   return this.cart;
  // }
  // public getTotalPrice(): number {
  //   return this.totalPrice;
  // }
  // public setTotalPrice(price: number): void {
  //   this.totalPrice = price;
  //   localStorage.setItem("totalPrice", "" + this.totalPrice);
  // }


  public addToCart(id: number, quantity: number) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.post<IResponse>('https://limit-lessstaging.azurewebsites.net/webapi2/Cart/AddToCart',
      {
        "id": id,
        "quantity": quantity
      },
      {
        headers: new HttpHeaders(modifiedHeader)
      });
  }

  // public removeFromCart(productId: number): void {
  //   this.cart = this.cart.filter((product) => {
  //     if (product.data.id === productId) {
  //       this.totalPrice -= (product.data.priceValue) * (product.data.addToCart.quantity);
  //       // return false;
  //     }
  //     // else
  //     //   return true;
  //   })
  //   localStorage.setItem("cachedCart", JSON.stringify(this.cart));
  //   localStorage.setItem("totalPrice", "" + this.totalPrice);

  // }

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

  // public getCart(): ICart {
  //   this.getCart2().subscribe({
  //     next: (response) => {
  //       this.cart = response;
  //       console.log(response);

  //     }
  //   })
  //   return this.cart;
  // }

  // public setCart(cart: ICart) {
  //   this.cart = cart;
  // }

  public payment(paymentMethod: string) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IUpdateResponse>(`https://limit-lessstaging.azurewebsites.net/webapi2/Order/SelectPaymentMethod/${paymentMethod}`,
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  public placeOrder() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<IOrder>('https://limit-lessstaging.azurewebsites.net/webapi2/Order/ConfirmOrder',
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  public trackOrder() {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.get<ITOResponse>('https://limit-lessstaging.azurewebsites.net/webapi2/Order/OrdersHistory',
      {
        headers: new HttpHeaders(modifiedHeader)
      })
  }

  public cancelOrder(orderId: number) {
    const accessToken = JSON.parse(localStorage.getItem('currentUser') || '{}').data.accessToken;
    const modifiedHeader = {
      'Authorization': `Bearer ${accessToken}`
    };
    return this.http.put<IUpdateResponse>(`https://limit-lessstaging.azurewebsites.net/webapi2/Order/CancelOrder/${orderId}`, {},
      {
        headers: new HttpHeaders(modifiedHeader)
      });
  }
}
