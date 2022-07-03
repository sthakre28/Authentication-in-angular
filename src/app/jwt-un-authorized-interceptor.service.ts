import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorizedInterceptorService implements  HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(

      (event : HttpEvent<any>) => {
        if (event instanceof HttpResponse){
          //do something here
        }
      },
      (error:any) => {
        if (error instanceof HttpResponse){
          if(error.status == 401){
            console.log(error);
            alert("401 Unauthorized");
          }
        }
      }
    ))
  }
}
