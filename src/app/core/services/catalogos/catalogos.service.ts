import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(
    private http: HttpClient
  ) { }
  getAreas(): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}list.php?a=list`);
  }
  getIngredientes(): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}list.php?i=list`);
  }
  getCategorias(): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}list.php?c=list`);
  }
}
