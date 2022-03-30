import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PlatillosRoutingModule } from './platillos-routing.module';
import { PlatillosDetalleComponent } from './components/platillos/platillos-detalle/platillos-detalle/platillos-detalle.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PlatillosListComponent } from './components/platillos/platillos-list/platillos-list.component';
import { PlatillosPorIngredienteComponent } from './components/platillos-por-ingrediente/platillos-por-ingrediente/platillos-por-ingrediente.component';

const componentsPlatillos = [PlatillosComponent,
  PlatillosDetalleComponent,
  PlatillosListComponent,
  PlatillosPorIngredienteComponent];

@NgModule({
  declarations: [
    componentsPlatillos
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlatillosRoutingModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class PlatillosModule { }
