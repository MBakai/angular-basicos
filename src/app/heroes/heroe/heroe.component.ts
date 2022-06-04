import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.componet.html'
})

export class HeroeComponet{

  nombre: string = 'Iroman'
  edad: number = 45

  get nombreCapitalizado(): string{

    return this.nombre.toUpperCase();

  }

  obtenerEdad(): string{

    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 30;
  }

}
