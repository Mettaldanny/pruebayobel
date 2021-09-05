import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pedido } from './pedido';
import { Cliente } from '../clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiURL = "http://localhost:8000/api/pedido/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }  

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Pedido[]> {
   return this.httpClient.get<Pedido[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(pedido): Observable<Pedido> {
   return this.httpClient.post<Pedido>(this.apiURL, JSON.stringify(pedido), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Pedido> {
   return this.httpClient.get<Pedido>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, pedido): Observable<Pedido> {
   return this.httpClient.put<Pedido>(this.apiURL + id, JSON.stringify(pedido), this.httpOptions)
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
