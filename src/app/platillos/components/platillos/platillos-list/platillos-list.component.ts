import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Platillo } from 'src/app/core/models/Platillo';

@Component({
  selector: 'app-platillos-list',
  templateUrl: './platillos-list.component.html',
  styleUrls: ['./platillos-list.component.scss']
})
export class PlatillosListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @Output() platillosDetalles: EventEmitter<string> = new EventEmitter<string>();

  dataPlatillos: Platillo[] = new Array();
  dataSource: any;
  selection: any;

  displayedColumns: string[] = [
    'strMealThumb',
    'idMeal',
    'strMeal'
  ];

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Platillo>(this.dataPlatillos);
    this.selection = new SelectionModel<Platillo>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDetallePlatillo(id: string)
  {
    console.log('id', id);
    this.platillosDetalles.emit(id);
  }

  setPlatillos(dataPlatillos: Platillo[]) {
    this.dataPlatillos = dataPlatillos;
    this.dataSource.data = this.dataPlatillos;
  }
}
