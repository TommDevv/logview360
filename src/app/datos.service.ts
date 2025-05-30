import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
 urlAPI = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  cargarRegistros(): Observable<any> {
    return this.http.get(`${this.urlAPI}/obtener/todos`);
  }

  cargarIndividual(id:string): Observable<any>{
    return this.http.get(`${this.urlAPI}/obtener/transaction_id/${id}`);
  }

  cargarAnomalias(): Observable<any> {
    return this.http.get(`${this.urlAPI}/trazabilidad/inconsistencias`);
  }

  solicitarInformacion(id: string): Observable<any> {
    let params = new HttpParams().set('transaction_id', id);
  
    return this.http.get(`${this.urlAPI}/obtener/transaction_id/`,{params});
  }
}
