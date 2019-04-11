import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor} from '../model/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {
  apiUrl = 'http://localhost:8080/professor';

  constructor( private http: HttpClient ) { }

  getListaProfessores(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  getByMatricula(mat: string): Observable<Professor> {
    return this.http.get<Professor>(`${this.apiUrl}/${mat}`);
  }
}
