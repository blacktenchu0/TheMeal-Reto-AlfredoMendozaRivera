import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ingrediente, ResponseIngredientes } from 'src/app/core/models/Catalogos';
import { ResponseIngredientesPopulares } from 'src/app/core/models/Ingrediente';
import { IngredientesService } from 'src/app/core/services/ingredientes/ingredientes.service';
import { IngredientesPopularesListComponent } from './ingredientes-populares-list/ingredientes-populares-list.component';

@Component({
  selector: 'app-ingredientes-populares',
  templateUrl: './ingredientes-populares.component.html',
  styleUrls: ['./ingredientes-populares.component.scss']
})
export class IngredientesPopularesComponent implements OnInit {

  @ViewChild(IngredientesPopularesListComponent) childIngredientesPopularesList: IngredientesPopularesListComponent;

  areaSeleccionado = '';
  categoriaSeleccionado = '';
  ingredienteSeleccionado = '';

  dataIngredientesPopulares: Ingrediente[] = [];

  constructor(private ingredientesService: IngredientesService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getIngredientesPopulares();
    });
  }

  getIngredientesPopulares() {
    this.ingredientesService.getIngredientesPopulares().subscribe((res: ResponseIngredientesPopulares) => {
      this.dataIngredientesPopulares = res.meals!;
      this.childIngredientesPopularesList.setIngredientesPopulares(this.dataIngredientesPopulares);
    });
  }

  getPlatillosPorIngrediente($event: any) {
    console.log('$event', $event);
    this.router.navigate(['/platillos/ingrediente'], { queryParams: { ingrediente: $event.toString() } });
  }
}
