import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnomaliasComponent } from './anomalias/anomalias.component';
import { LatenciaComponent } from './latencia/latencia.component';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';
import { CargaArchivosComponent } from './carga-archivos/carga-archivos.component';

const routes: Routes = [
  { path: '', redirectTo: '/trazabilidad', pathMatch: 'full' },
  {path: 'trazabilidad', component: TrazabilidadComponent},
  {path: 'anomalias', component: AnomaliasComponent},
  {path: 'latencia', component: LatenciaComponent},
  {path: 'archivos', component: CargaArchivosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
