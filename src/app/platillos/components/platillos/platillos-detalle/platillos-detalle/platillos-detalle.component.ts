import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platillo, ResponsePlatilloById } from 'src/app/core/models/Platillo';
import { PlatillosService } from 'src/app/core/services/platillos/platillos.service';

@Component({
  selector: 'app-platillos-detalle',
  templateUrl: './platillos-detalle.component.html',
  styleUrls: ['./platillos-detalle.component.scss']
})
export class PlatillosDetalleComponent implements OnInit {

  platillo: Platillo;
  videoId = '';
  constructor(private router: ActivatedRoute,
    private platillosService: PlatillosService) {
  }

  ngOnInit(): void {
    this.router.queryParams
      .subscribe(params => {
        console.log(params);
        this.getPlatilloById(params['id'])
      }
      );
  }

  getPlatilloById(id: string) {
    this.platillosService.getPlatilloById(id).subscribe((res: ResponsePlatilloById) => {
      console.log('res', res);
      this.platillo = res.meals![0];
      this.videoId = this.platillo.strYoutube!.split("=").pop()!;
    });
  }
}
