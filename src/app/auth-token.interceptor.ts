import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private http: HttpClient) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const modifiedHeader = {
    //   Authorization: `Bearer `
    // }
    // const modifiedRequest = request.clone({
    //   headers: new HttpHeaders(modifiedHeader)
    // });

    return next.handle(request);
  }
}
