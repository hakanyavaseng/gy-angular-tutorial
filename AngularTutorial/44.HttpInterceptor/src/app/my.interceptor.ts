import { HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const myInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

// Old way
@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(request : HttpRequest<unknown>, next: HttpHandler) {

    console.log('REQUEST HAS COME! : Request URL: ' + request.url);

    return next.handle(request);
  }
}
