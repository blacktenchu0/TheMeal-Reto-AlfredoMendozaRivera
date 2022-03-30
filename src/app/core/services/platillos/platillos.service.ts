import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {
  constructor(
    private http: HttpClient
  ) { }
  getPlatilloById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}lookup.php?i=${id}`);
  }
  getPlatillos(): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}search.php?s=`);
  }
  getPlatillosRandom(): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}random.php`);
  }
  getPlatillosArea(area: string): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}filter.php?a=${area}`)
  }
  getPlatillosCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}filter.php?c=${categoria}`);
  }
  getPlatillosIngrediente(ingrediente: string): Observable<any> {
    return this.http.get<any>(`${environment.apiRaiz}filter.php?i=${ingrediente}`);
  }
}
