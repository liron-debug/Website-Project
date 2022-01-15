import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  
  constructor(private http : HttpClient) { }

  contactMessageToDatabase(contactMessage) : Observable<any> {
    return this.http.post<any>("https://localhost:44310/api/ContactMessages", JSON.stringify(contactMessage), this.httpOptions ).pipe(
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
