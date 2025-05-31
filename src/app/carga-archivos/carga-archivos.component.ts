import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { forkJoin, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-carga-archivos',
  templateUrl: './carga-archivos.component.html',
  styleUrls: ['./carga-archivos.component.scss']
})
export class CargaArchivosComponent {
  secuCheckFile: File | null = null;
  esbFile: File | null = null;
  coreFile: File | null = null;
  loading: boolean = false

  constructor(private datosService: DatosService) {}

  onFileSelected(event: Event, tipo: 'secuCheck' | 'esb' | 'core'): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (!file) return;

    switch (tipo) {
      case 'secuCheck':
        this.secuCheckFile = file;
        break;
      case 'esb':
        this.esbFile = file;
        break;
      case 'core':
        this.coreFile = file;
        break;
    }
  }

  subirArchivos(): void {
    if (!this.secuCheckFile || !this.esbFile || !this.coreFile) return;

    this.loading = true;

    // Leer JSON primero
    const reader = new FileReader();
    reader.onload = () => {
      const jsonText = reader.result as string;

      // Subir JSON, luego CSV y LOG en paralelo
      this.datosService.cargarJson(jsonText).pipe(
        switchMap(() =>
          forkJoin([
            this.datosService.enviarEsbCsv(this.esbFile!),
            this.datosService.enviarCoreLog(this.coreFile!)
          ])
        ),
        catchError(err => {
          console.error('❌ Error durante la carga', err);
          this.loading = false;
          alert('❌ Error al subir archivos. Ver consola.');
          return of(null);
        })
      ).subscribe(result => {
        this.loading = false;
        if (result) {
          alert('✅ Archivos subidos correctamente.');
        }
      });
    };

    reader.onerror = () => {
      this.loading = false;
      console.error('❌ Error al leer archivo JSON');
      alert('❌ No se pudo leer el archivo JSON');
    };

    reader.readAsText(this.secuCheckFile);
  }
}
