import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfService {
  professores: any[];
  constructor() {
    this.professores = this.inicializarProfessores();
   }

  inicializarProfessores() {
    return [{
        matricula: '54625-0',
        nome: 'Fernando Wanderley',
        email: 'fernando@unicap.br'
      },
      {
        matricula: '32541-5',
        nome: 'Fernando Bertino',
        email: 'fernando.bertino@unicap.br'
      },
      {
        matricula: '54613-4',
        nome: 'Sérgio Murilo',
        email: 'sergio.murilo@unicap.br'
      },
      {
        matricula: '32485-7',
        nome: 'Antônio Cavalcanti',
        email: 'tj@unicap.br'
      },
      {
        matricula: '32946-0',
        nome: 'Giba',
        email: 'giba@unicap.br'
      },
    ];
  }
  getProfessores() {
    return this.professores;
  }

  getByMatricula(mat: string) {
    let professor: any = null;

    this.professores.forEach(element => {
      if (element.matricula === mat) {
        professor = element;
        return true;
      }
    });

    return professor;
  }
}
