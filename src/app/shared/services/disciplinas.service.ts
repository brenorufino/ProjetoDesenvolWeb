import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../model/disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  apiUrl = 'http://localhost:8080/disciplina';

  constructor( private http: HttpClient ) { }

  getListaDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }
}
