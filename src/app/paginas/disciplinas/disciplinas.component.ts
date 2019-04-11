import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresService } from 'src/app/shared/services/professores.service';
import { DisciplinasService } from 'src/app/shared/services/disciplinas.service';

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
    private servprof: ProfessoresService,
    private servdisc: DisciplinasService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.matricula = params.id;
    });
    this.servprof.getByMatricula(this.matricula).subscribe(resp => {
      this.professor = resp;
      if (!this.professor) {
        this.router.navigate(['not-found']);
      }
    });
    this.servdisc.getListaDisciplinas().subscribe(resp => this.disciplinas = resp);
  }
}
