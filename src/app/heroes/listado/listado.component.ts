import { splitClasses } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Thor', 'Hulk', 'Cápitan America'];

  heroe: string = '';

  borrarHero(){
    this.heroe  = this.heroes.shift() || '';
   }


}
