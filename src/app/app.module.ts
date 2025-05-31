import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';
import { AnomaliasComponent } from './anomalias/anomalias.component';
import { LatenciaComponent } from './latencia/latencia.component';
import { FormsModule } from '@angular/forms';
import { CargaArchivosComponent } from './carga-archivos/carga-archivos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TrazabilidadComponent,
    AnomaliasComponent,
    LatenciaComponent,
    CargaArchivosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
