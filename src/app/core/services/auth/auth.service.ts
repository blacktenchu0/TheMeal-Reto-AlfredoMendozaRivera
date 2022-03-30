import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private i_usuario!: Usuario;
  private i_loggedUser!: boolean;

  constructor() { }

  public get usuario(): Usuario {
    this.i_usuario = JSON.parse(localStorage.getItem('usuario')!) as Usuario;
    return this.i_usuario;
  }

  public get loggedUser(): boolean {
    if (
      localStorage.getItem('logged') &&
      localStorage.getItem('logged') !== null &&
      localStorage.getItem('logged') !== ''
    ) {
      if ((JSON.parse(localStorage.getItem('logged')!) as boolean) === true) {
        this.i_loggedUser = true;
      } else {
        this.i_loggedUser = false;
      }
    } else {
      this.i_loggedUser = false;
    }

    return this.i_loggedUser;
  }

  async setUsuario(
    usuario: Usuario,
  ) {
    // console.log('usuario response', response);
    this.i_usuario = new Usuario();
    this.i_usuario.id = usuario.id;
    this.i_usuario.nombre = usuario.nombre;
    this.i_usuario.apellidoPaterno = usuario.apellidoPaterno;
    this.i_usuario.apellidoMaterno = usuario.apellidoMaterno;
    this.i_usuario.correo = usuario.correo;
    this.i_usuario.usuario = usuario.usuario;
    this.i_usuario.telefono = usuario.telefono;
    localStorage.setItem('usuario', JSON.stringify(this.i_usuario));
  }

  setLoggedUser(logged: boolean) {
    localStorage.setItem('logged', JSON.stringify(logged));
  }

  login(usuarioLogin: string, passwordLogin: string): Observable<any> {
    let resultado: Array<any> | undefined = undefined;

    let conteo = 0;
    let banderaEncontrado = false;
    let usuarioEncontrado: Usuario;
    usuariosRegistrados.forEach(usuarioArr => {
      if (usuarioLogin === usuarioArr.usuario) {
        banderaEncontrado = true;
        conteo = usuariosRegistrados.length - 1;
        usuarioEncontrado = usuarioArr;
      }
      conteo = conteo + 1;
      if (usuariosRegistrados.length === conteo) {
        if (banderaEncontrado === true) {
          if (usuarioEncontrado.password === passwordLogin) {
            resultado = [{ resultado: true, mensaje: '¡Bienvenid@ ' + usuarioEncontrado.nombre + '!', usuario: usuarioEncontrado }];
          } else {
            resultado = [{
              resultado: false, mensaje: 'La contraseña ingresada no corresponde con la del usuario '
                + usuarioLogin + '. Intentelo nuevamente.', usuario: null
            }];
          }
        } else {
          resultado = [{ resultado: false, mensaje: 'No se encontró información del usuario ingresado. Intentelo nuevamente.', usuario: null }];
        }
      }
    });
    return of
      (resultado);
  }

  logout() {
    this.i_loggedUser = false;
    this.i_usuario = new Usuario();
    localStorage.removeItem('logged');
    localStorage.removeItem('usuario');
  }
}

const usuariosRegistrados: Usuario[] = [{
  id: 1,
  usuario: 'user',
  password: 'root',
  nombre: 'Alfredo',
  apellidoPaterno: 'Mendoza',
  apellidoMaterno: 'Rivera',
  correo: 'mecasistemas_42@hotmail.com',
  telefono: '7226322292',
}];
