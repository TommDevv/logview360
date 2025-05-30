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

  constructor(private datosService: DatosService){

  }

  ngOnInit(){

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
    this.datosService.cargarIndividual(this.individualId).subscribe({
      next: (data) => {
        this.registroIndividual = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }
  
}
