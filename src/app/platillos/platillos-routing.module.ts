import { NgModule } from '@angular/core';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { RouterModule, Routes } from '@angular/router';
import { PlatillosDetalleComponent } from './components/platillos/platillos-detalle/platillos-detalle/platillos-detalle.component';
import { PlatillosPorIngredienteComponent } from './components/platillos-por-ingrediente/platillos-por-ingrediente/platillos-por-ingrediente.component';

const routes: Routes = [
  {
    path: '',
    component: PlatillosComponent
  },
  {
    path: 'detalle',
    component: PlatillosDetalleComponent
  }
  ,
  {
    path: 'ingrediente',
    component: PlatillosPorIngredienteComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class PlatillosRoutingModule { }
