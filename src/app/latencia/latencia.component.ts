import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { RegistroLatencia } from './latencia.component.spec';

@Component({
  selector: 'app-latencia',
  templateUrl: './latencia.component.html'
})
export class LatenciaComponent implements OnInit {
  registros: any[] = [];

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    var sum=0;
    var cont = 0;
    this.datosService.obtenerLatencias().subscribe({
      next: (data) => {
        this.registros = data;
        data.array.forEach((element: any) => {
          sum += element.latenciaJsonCsv;
          cont++;
        });
        if (cont > 0) {
          const promedio = sum / cont;
          console.log('Promedio de latencias:', promedio);
        } else {
          console.log('No se encontraron registros para calcular el promedio.');
        }
      },
      error: (err) => {
        console.error('Error al cargar las latencias:', err);
      }
    });
  }
}
