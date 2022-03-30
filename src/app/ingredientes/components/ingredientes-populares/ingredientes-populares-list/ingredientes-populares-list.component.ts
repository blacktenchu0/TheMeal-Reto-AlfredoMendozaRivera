import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ingrediente } from 'src/app/core/models/Catalogos';

@Component({
  selector: 'app-ingredientes-populares-list',
  templateUrl: './ingredientes-populares-list.component.html',
  styleUrls: ['./ingredientes-populares-list.component.scss']
})
export class IngredientesPopularesListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Output() platillosPorIngrediente: EventEmitter<string> = new EventEmitter<string>();

  dataIngredientesPopulares: Ingrediente[] = new Array();
  dataSource: any;
  selection: any;

  displayedColumns: string[] = [
    'idIngredient',
    'strIngredient'
  ];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Ingrediente>(this.dataIngredientesPopulares);
    this.selection = new SelectionModel<Ingrediente>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getPlatillosPorIngrediente(id: string)
  {
    console.log('id', id);
    this.platillosPorIngrediente.emit(id);
  }

  setIngredientesPopulares(dataIngredientesPopulares: Ingrediente[]) {
    this.dataIngredientesPopulares = dataIngredientesPopulares;
    this.dataSource.data = this.dataIngredientesPopulares;
  }
}
