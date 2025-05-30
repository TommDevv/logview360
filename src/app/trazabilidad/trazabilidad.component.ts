import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.scss']
})
export class TrazabilidadComponent implements OnInit{
  transacciones: any[] = []
  registroIndividual: any = null
  individualId: string = ''
  latenciaESB: number = 0
  latenciaCORE: number = 0

  constructor(private datosService: DatosService){

  }

  ngOnInit(){
    this.obtenerTransacciones();
  }

  obtenerTransacciones(){
    this.datosService.cargarRegistros().subscribe({
      next: (data) => {
        this.transacciones = data;
      }, error: (error) => {
        console.log(error)
      }
    })
  }

  formatFechaCompleta(fecha: string | Date): string {
    const date = new Date(fecha);
    const pad = (n: number, z = 2) => ('00' + n).slice(-z);
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad(date.getMilliseconds(), 3)}`;
  }

  obtenerIndividual(){
    
    this.datosService.solicitarInformacion(this.individualId).subscribe({
      next: (data:any) => {
        this.registroIndividual = data[0];
        this.obtenerlatencias();
      }, error: (error: any) => {
        console.log(error);
      }
    })
  }

  obtenerlatencias(){
    this.datosService.latenciasporId(this.individualId).subscribe({
      next: (data) => {
        this.latenciaCORE = data.latencia_json_esb*1000;
        this.latenciaESB = data.latencia_esb_core*1000;
      }, error: (error) => {
        console.log(error)
      }
    })
  }
  
}
