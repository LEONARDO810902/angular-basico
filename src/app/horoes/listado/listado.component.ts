import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

Horoes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];
heroeBorrado: string = '';


borrarHeroe(){

  this.heroeBorrado = this.Horoes.shift() ||'';
}
}




