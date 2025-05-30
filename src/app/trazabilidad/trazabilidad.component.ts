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
  latenciaESB: string = ''
  latenciaCORE: string = ''

  constructor(private datosService: DatosService){

  }

  ngOnInit(){
    this.obtenerTransacciones();
    this.obtenerlatencias();
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

  obtenerIndividual(){
    this.datosService.solicitarInformacion(this.individualId).subscribe({
      next: (data) => {
        this.registroIndividual = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  obtenerlatencias(){
    this.datosService.cargarIndividual(this.individualId).subscribe({
      next: (data) => {
        this.latenciaCORE = data.latencia_json_esb;
        this.latenciaESB = data.latencia_esb_core;
      }
    })
  }
  
}
