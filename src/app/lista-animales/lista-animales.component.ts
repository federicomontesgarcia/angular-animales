import { Component, OnInit } from '@angular/core';
import { EspecieAnimalComponent } from '../especie-animal/especie-animal.component';
import { EspecieAnimal } from './../models/especie-animal.model';
@Component({
  selector: 'app-lista-animales',
  templateUrl: './lista-animales.component.html',
  styleUrls: ['./lista-animales.component.css']
})
export class ListaAnimalesComponent implements OnInit {
  lista: EspecieAnimal[];

  constructor() { 
    this.lista = [];
  }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean {
    this.lista.push(new EspecieAnimal(nombre, url));
    return false;
  }

}
