import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

// export const customHttpInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    return next
      .handle(request)
      .pipe(catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log('Client-side error: ', error.error.message);
          }
          else {
            switch (error.status) {
              case 404:
                console.log('Not Found');
                break;
              case 500:
                console.log('Internal Server Error');
                break;
              default:
                console.log('Error: ', error.message);
                break;
            }
          }
        }
        return throwError(() => error.message);
      }));
  }
}
