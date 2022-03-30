import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':perfil',
    component: UsuarioComponent
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
export class UsuarioRoutingModule { }
