import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProducts() : Observable<Item[]> {
    return this.http.get<Item[]>("https://localhost:44310/api/Products").pipe(
      retry(1),
      catchError(this.errorHandler)
    )
    // return dbProducts ;
  }

  getProductsById(id : number) {
    return this.http.get<Item>("https://localhost:44310/api/Products/" + id).pipe(
      retry(1),
      catchError(this.errorHandler)
    )
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

  
