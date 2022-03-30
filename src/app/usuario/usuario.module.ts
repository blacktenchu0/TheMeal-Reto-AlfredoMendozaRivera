import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { UsuarioRoutingModule } from './usuario-routing.module';

const componentsUsuario = [UsuarioComponent];

@NgModule({
  declarations: [
    componentsUsuario
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class UsuarioModule { }
