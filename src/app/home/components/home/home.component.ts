import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platillo, ResponsePlatilloRandom } from 'src/app/core/models/Platillo';
import { Usuario } from 'src/app/core/models/Usuario';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PlatillosService } from 'src/app/core/services/platillos/platillos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  platillo: Platillo;

  constructor(private authService: AuthService,
    private router: Router,
    private platillosService: PlatillosService) {
    this.usuario = this.authService.usuario;
    this.platillo = new Platillo();
    this.platillo.strMealThumb = '';
  }

  ngOnInit(): void {
    this.getPlatilloBienvenida();
  }

  getPlatilloBienvenida(): void {
    this.platillosService.getPlatillosRandom().subscribe((res: ResponsePlatilloRandom) => {
      console.log('res.meals', res.meals);
      this.platillo.strMealThumb = res.meals![0].strMealThumb;
      this.platillo.strMeal = res.meals![0].strMeal;
      this.platillo.idMeal = res.meals![0].idMeal;

      console.log('platillo', this.platillo);
    });
  }

  getDetallePlatillo(): void {
    this.router.navigate(['/platillos/detalle'], { queryParams: { id: this.platillo.idMeal } });
  }

}
