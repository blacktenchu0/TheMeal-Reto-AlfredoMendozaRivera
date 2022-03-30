import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientesPopularesComponent } from './components/ingredientes-populares/ingredientes-populares.component';
import { SharedModule } from '../shared/shared.module';
import { IngredientesRoutingModule } from './ingredientes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { IngredientesPopularesListComponent } from './components/ingredientes-populares/ingredientes-populares-list/ingredientes-populares-list.component';

const componentsIngredientes = [IngredientesPopularesComponent,
  IngredientesPopularesListComponent];

@NgModule({
  declarations: [
    componentsIngredientes
  ],
  imports: [
    CommonModule,
    SharedModule,
    IngredientesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class IngredientesModule { }
