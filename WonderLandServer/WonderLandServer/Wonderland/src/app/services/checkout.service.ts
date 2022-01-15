import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http : HttpClient) { }

  sendOrderToDatabase(order) : Observable<any> {
    // console.log(order);
    return this.http.post<any>("https://localhost:44310/api/Orders", JSON.stringify(order), this.httpOptions ).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error) {
    let errorMessage = '' ;
    if (error.error instanceof ErrorEvent) {
      // get client side error
      errorMessage = error.error.message ;
    } else {
      // get server side error
      errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}` ;
    }
    console.log(errorMessage);
    return throwError(errorMessage) ;
    
  }

}
