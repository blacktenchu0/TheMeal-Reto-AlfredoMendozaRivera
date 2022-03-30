import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/Usuario';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Alertas } from 'src/app/utils/alertas';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent {

  usuario: Usuario;

  alertas: Alertas = new Alertas();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { this.usuario = this.authService.usuario;}

  cerrarSesion(): void {
    this.authService.logout();
    this.alertas.alertToast('Se ha cerrado la sesión con éxito', 'success');
    this.router.navigate(['/auth/login']);
  }
}
