import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Cliente} from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiURL = "http://localhost:8000/api/cliente";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.apiURL,JSON.stringify(cliente), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id, cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.apiURL + id, JSON.stringify(cliente), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id){
    return this.httpClient.delete<Cliente>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
