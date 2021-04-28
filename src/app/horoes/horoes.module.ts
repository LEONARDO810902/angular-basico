import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoroeComponent } from './horoe/horeo.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HoroeComponent,
    ListadoComponent
  ],

  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],

  providers: [],
})
export class HoroesModule {}
