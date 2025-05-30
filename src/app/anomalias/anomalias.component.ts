import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-anomalias',
  templateUrl: './anomalias.component.html',
  styleUrls: ['./anomalias.component.scss']
})
export class AnomaliasComponent implements OnInit {
  
  inconsistencias: any[];
  objetos: any[];
  
  constructor(private datosService: DatosService) {
    this.inconsistencias = [];
    this.objetos = [];
    this.datosService.cargarAnomalias().subscribe({next: (response) => {
      this.inconsistencias = response.resultados;
      for (let inconsistencia of this.inconsistencias) {
      this.datosService.solicitarInformacion(inconsistencia.transaction_id).subscribe({
        next: (response) => {
          this.objetos.push(response);
        },
        error: (error) => {
          console.error('Error al cargar información de la transacción:', error);
        }
      });
      
    console.log(this.objetos);
    }
    }
    })

  }


  ngOnInit(): void {
    

  }


}
