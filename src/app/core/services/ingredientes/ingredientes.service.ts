import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  constructor(
    private http: HttpClient
  ) { }
  getIngredientesPopulares(): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}list.php?i=list`);
  }
}
