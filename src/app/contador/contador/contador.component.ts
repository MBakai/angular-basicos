import { Component } from "@angular/core";

@Component({

  selector:'app-contador',
  template: `

    <h1>{{ titulo }}</h1>

    <h2>La base es 5</h2>

    <button (click)="acumular(base)"> + {{ base }} </button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)"> - {{ base }} </button>


  `
})

export class ContadorComponent{

  titulo: string = 'Acomulador App';

  numero: number = 0;
  base: number = 5;

  acumular( valor: number ){

    if(valor == 5){
      this.numero += valor;
    }else if(valor == -5 && this.numero > 0){
      this.numero += valor;
    }
  }

}
