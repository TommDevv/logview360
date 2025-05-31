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
  file: File | null = null;
  
  constructor(private datosService: DatosService) {
    this.inconsistencias = [];
    this.objetos = [];
  }


  ngOnInit(): void {
    this.datosService.cargarAnomalias().subscribe({next: (response) => {
      this.inconsistencias = response.resultados;
      for (let inconsistencia of this.inconsistencias) {
      this.datosService.solicitarInformacion(inconsistencia.transaction_id).subscribe({
        next: (response) => {
          this.objetos.push(response[0]);
        },
        error: (error) => {
          console.error('Error al cargar información de la transacción:', error);
        }
      });
      
    console.log(this.objetos);
    }
    }
    })
     this.datosService.obtenerHistograma().subscribe({
    next: (response) => {
      const blob = new Blob([response], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      const img = document.createElement('img');
      img.src = url;
      img.style.width = '100%';
      img.style.height = 'auto';

      const contenedor = document.getElementById('histograma');
      if (contenedor) {
        contenedor.innerHTML = ''; // Limpia contenido anterior si es necesario
        contenedor.appendChild(img);
      }
    },
    error: (error) => {
      console.error('Error al cargar el histograma:', error);
    }
  });

  }


}
