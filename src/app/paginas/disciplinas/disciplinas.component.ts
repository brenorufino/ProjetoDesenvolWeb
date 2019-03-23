import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfService } from 'src/app/shared/services/prof.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.scss']
})
export class DisciplinasComponent implements OnInit {
  disciplinas: any[];
  matricula: string;
  professor: any;
  urlProfessor = 'https://pngimage.net/wp-content/uploads/2018/06/pessoa-icon-png-4.png';
  urlUnicap =  'http://www.unicap.br/ppgd/wp-content/uploads/2016/12/marca_2025_altaresol.png';
  constructor(
    private route: ActivatedRoute,
    private servprof: ProfService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.matricula = params.id;
    });
    this.disciplinas = this.inicializaDisciplinas();
    this.professor = this.servprof.getByMatricula(this.matricula);
    if (!this.professor) {
      this.router.navigate(['not-found']);
    }
  }

  inicializaDisciplinas() {
    return [
      {
        codigo: 'INF1904',
        descricao: 'Desenvolvimento WEB',
        qtdCreditos: 5
      },
      {
        codigo: 'INF3512',
        descricao: 'Programação Orientada a Objetos',
        qtdCreditos: 4
      },
      {
        codigo: 'INF2146',
        descricao: 'Programação Funcional',
        qtdCreditos: 4
      },
      {
        codigo: 'INF2004',
        descricao: 'Introdução a Programação',
        qtdCreditos: 4
      },
    ];
  }


}
