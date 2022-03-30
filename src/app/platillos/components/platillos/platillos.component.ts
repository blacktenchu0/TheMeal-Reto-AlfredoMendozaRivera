import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Area, Categoria, Ingrediente, ResponseAreas, ResponseCategorias, ResponseIngredientes } from 'src/app/core/models/Catalogos';
import { Platillo, ResponsePlatillo, ResponsePlatillosByArea, ResponsePlatillosByCategoria, ResponsePlatillosByIngrediente } from 'src/app/core/models/Platillo';
import { CatalogosService } from 'src/app/core/services/catalogos/catalogos.service';
import { PlatillosService } from 'src/app/core/services/platillos/platillos.service';
import { PlatillosListComponent } from './platillos-list/platillos-list.component';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.scss']
})
export class PlatillosComponent implements OnInit {

  @ViewChild(PlatillosListComponent) childPlatillosList: PlatillosListComponent;

  areaSeleccionado = '';
  categoriaSeleccionado = '';
  ingredienteSeleccionado = '';

  dataPlatillos: Platillo[] = [];
  dataAreas: Area[] = [];
  dataCategorias: Categoria[] = [];
  dataIngredientes: Ingrediente[] = [];

  constructor(private platillosService: PlatillosService, private catalogosService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getPlatillos();
      this.getAreas();
      this.getIngredientes();
      this.getCategorias();
    });
  }

  getPlatillos() {
    this.platillosService.getPlatillos().subscribe((res: ResponsePlatillo) => {
      this.dataPlatillos = res.meals!;
      this.childPlatillosList.setPlatillos(this.dataPlatillos);
    });
  }

  getAreas(): void {
    this.catalogosService.getAreas().subscribe((res: ResponseAreas) => {
      this.dataAreas = res.meals!;
    });
  }

  getCategorias(): void {
    this.catalogosService.getCategorias().subscribe((res: ResponseCategorias) => {
      this.dataCategorias = res.meals!;
    });
  }

  getIngredientes(): void {
    this.catalogosService.getIngredientes().subscribe((res: ResponseIngredientes) => {
      this.dataIngredientes = res.meals!;
    });
  }

  filtrarTablaAreas() {
    this.categoriaSeleccionado = '';
    this.ingredienteSeleccionado = '';

    if (this.areaSeleccionado && this.areaSeleccionado !== '') {
      this.platillosService.getPlatillosArea(this.areaSeleccionado).subscribe((res: ResponsePlatillosByArea) => {
        this.dataPlatillos = res.meals!;
        this.childPlatillosList.setPlatillos([]);
        this.childPlatillosList.setPlatillos(this.dataPlatillos);
      });
    } else {
      this.getPlatillos();
    }
  }

  filtrarTablaIngredientes() {
    this.areaSeleccionado = '';
    this.categoriaSeleccionado = '';

    if (this.ingredienteSeleccionado && this.ingredienteSeleccionado !== '') {
      this.platillosService.getPlatillosIngrediente(this.ingredienteSeleccionado).subscribe((res: ResponsePlatillosByIngrediente) => {
        this.dataPlatillos = res.meals!;
        this.childPlatillosList.setPlatillos([]);
        this.childPlatillosList.setPlatillos(this.dataPlatillos);
      });
    } else {
      this.getPlatillos();
    }
  }

  filtrarTablaCategorias() {
    this.areaSeleccionado = '';
    this.ingredienteSeleccionado = '';

    if (this.categoriaSeleccionado && this.categoriaSeleccionado !== '') {
      this.platillosService.getPlatillosCategoria(this.categoriaSeleccionado).subscribe((res: ResponsePlatillosByCategoria) => {
        this.dataPlatillos = res.meals!;
        this.childPlatillosList.setPlatillos([]);
        this.childPlatillosList.setPlatillos(this.dataPlatillos);
      });
    } else {
      this.getPlatillos();
    }
  }

  getDetallePlatillo($event: any) {
    this.router.navigate(['/platillos/detalle'], { queryParams: { id: $event } });
  }
}
