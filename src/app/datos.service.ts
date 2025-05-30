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
    let params = new HttpParams().set('transaction_id', id);
    
    return this.http.get(`${this.urlAPI}/obtener/transaction_id/`, {params});
  }
  latenciasporId(id:string): Observable<any>{
    return this.http.get(`${this.urlAPI}/latencias/${id}`,);
  }

  cargarAnomalias(): Observable<any> {
    return this.http.get(`${this.urlAPI}/trazabilidad/inconsistencias`);
  }

  solicitarInformacion(id: string): Observable<any> {
    let params = new HttpParams().set('transaction_id', id);
  
    return this.http.get(`${this.urlAPI}/obtener/transaction_id/`,{params});
  }

  cargarJson(json:string){
    const jsonData = JSON.parse(json);
    return this.http.post(`${this.urlAPI}/json/`, jsonData);
  }

  
   enviarEsbCsv(file: File) {
    const formData = new FormData();
    formData.append('file', file); // nombre del campo esperado por el backend
    return this.http.post(`${this.urlAPI}/upload_csv`, formData);
  }

  enviarCoreLog(file: File) {
    const formData = new FormData();
    formData.append('file', file); // nombre del campo esperado por el backend
    return this.http.post(`${this.urlAPI}/procesar_logs`, formData);
  }

  obtenerHistograma(): Observable<any> {
    return this.http.get(`${this.urlAPI}/graficos/histograma`, { responseType: 'blob' });
  }

  obtenerLatencias(): Observable<any>{
    return this.http.get(`${this.urlAPI}/obtener/latencias`);
  }
}
