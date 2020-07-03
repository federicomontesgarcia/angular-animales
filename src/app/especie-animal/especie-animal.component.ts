import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { EspecieAnimal } from './../models/especie-animal.model';


@Component({
  selector: 'app-especie-animal',
  templateUrl: './especie-animal.component.html',
  styleUrls: ['./especie-animal.component.css']
})
export class EspecieAnimalComponent implements OnInit {
    @Input() animal: EspecieAnimal;
    @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() { }
    
  ngOnInit(): void {
  }

}
