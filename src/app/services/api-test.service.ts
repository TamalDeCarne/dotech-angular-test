import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  mainURL='https://jsonplaceholder.typicode.com/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json; charset=UTF-8'
    })
  }

  constructor(private http: HttpClient) { }
  
  getRows<T>(modelPath: string): Observable<T>{
  return this.http.get<T>(`${this.mainURL}${modelPath}`, )
  .pipe(retry(1), catchError(this.errorHandler));
  }

  getRow<T>(id:number, modelPath: string): Observable<T>{
    return this.http.get<T>(`${this.mainURL}${modelPath}${id}`, this.httpOptions)
    .pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error){
    let errorMessage = '';

    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code:${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

