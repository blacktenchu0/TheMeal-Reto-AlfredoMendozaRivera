import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Alertas } from 'src/app/utils/alertas';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  formLogin: FormGroup = new FormGroup({});

  alertas: Alertas = new Alertas();

  constructor(
    private formBuider: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.loggedUser) {
      this.alertas.alertToast('Ya se encuentra una sesión activa', 'warning');
      this.router.navigate(['/home']);
    } else {
      this.initFormulario();
    }
  }

  initFormulario(): void {
    this.formLogin = this.formBuider.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onEnterLogin(event: any) {
    const keycode = event.keyCode;
    if (keycode === 13) {
      if (
        this.formLogin.value.usuario &&
        this.formLogin.value.password &&
        this.formLogin.value.usuario.length > 0 &&
        this.formLogin.value.password.length > 0
      ) {
        this.login();
      }
    }
  }

  login(): void {
    this.authService.login(this.formLogin.value.usuario, this.formLogin.value.password).subscribe((resultado) => {
      if (resultado[0].resultado) {

        this.authService.setUsuario(resultado[0].usuario);
        this.authService.setLoggedUser(true);

        this.alertas.alertToast(resultado[0].mensaje, 'success');
        this.router.navigate(['/home']);
      } else {
        this.alertas.alertToast(resultado[0].mensaje, 'error');
      }
    });
  }
}
