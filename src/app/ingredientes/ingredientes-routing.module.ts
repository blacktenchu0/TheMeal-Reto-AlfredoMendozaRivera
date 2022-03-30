import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientesPopularesComponent } from './components/ingredientes-populares/ingredientes-populares.component';

const routes: Routes = [
  {
    path: ':populares',
    component: IngredientesPopularesComponent
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
export class IngredientesRoutingModule { }
