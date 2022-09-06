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
    //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXN0b21lcklkIjoiMTk2NzEiLCJMYW5ndWFnZSI6IjAiLCJuYmYiOjE2NDAwOTM3ODgsImV4cCI6MTY0MDE4MDE4OH0.mbfB02zf6MMI0Urk78JooZtHoOmKkdcNBLHkeeQnwbo`
    // }
    // const modifiedRequest = request.clone({
    //   headers: new HttpHeaders(modifiedHeader)
    // });

    // return next.handle(modifiedRequest);

    return next.handle(request);
  }
}
