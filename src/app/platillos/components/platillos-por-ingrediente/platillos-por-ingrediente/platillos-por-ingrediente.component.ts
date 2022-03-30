import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platillo, ResponsePlatillosByIngrediente } from 'src/app/core/models/Platillo';
import { PlatillosService } from 'src/app/core/services/platillos/platillos.service';

@Component({
  selector: 'app-platillos-por-ingrediente',
  templateUrl: './platillos-por-ingrediente.component.html',
  styleUrls: ['./platillos-por-ingrediente.component.scss']
})
export class PlatillosPorIngredienteComponent implements OnInit {

  platillosPorIngrediente: Platillo[] = [];

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private platillosService: PlatillosService) {
  }

  ngOnInit(): void {
    this.activatedRouter.queryParams
      .subscribe(paramsIngrediente => {
        console.log(paramsIngrediente);
        this.getPlatillosPorIngrediente(paramsIngrediente['ingrediente'])
      }
      );
  }

  getPlatillosPorIngrediente(ingrediente: string) {
    console.log('ingrediente', ingrediente);
    this.platillosService.getPlatillosIngrediente(ingrediente).subscribe((res: ResponsePlatillosByIngrediente) => {
      this.platillosPorIngrediente = res.meals!;
    });
  }

  getDetallePlatillo(id: any): void {
    this.router.navigate(['/platillos/detalle'], { queryParams: { id: id.toString() } });
  }

}
