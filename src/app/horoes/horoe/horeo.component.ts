import { Component } from "@angular/core";

@Component({
    selector:'app-horoe',
    templateUrl: 'horoe.component.html'

})

export class HoroeComponent{

nombre: string = 'Iroman';
edad: number = 45


get nombreCapitalizado(){
  return this.nombre.toLocaleUpperCase();
}

obtenerNombre(): string{

    return `${this.nombre} - ${this.edad}`;
}

cambiarNombre(): String{
  return this.nombre= 'Leonardo';
}

cambiarEdad(): number{
  return this.edad = 39;
}

}

