import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EspecieAnimalComponent } from './especie-animal/especie-animal.component';
import { ListaAnimalesComponent } from './lista-animales/lista-animales.component';

@NgModule({
  declarations: [
    AppComponent,
    EspecieAnimalComponent,
    ListaAnimalesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
