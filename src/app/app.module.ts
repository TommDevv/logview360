import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';
import { AnomaliasComponent } from './anomalias/anomalias.component';
import { LatenciaComponent } from './latencia/latencia.component';

@NgModule({
  declarations: [
    AppComponent,
    TrazabilidadComponent,
    AnomaliasComponent,
    LatenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
