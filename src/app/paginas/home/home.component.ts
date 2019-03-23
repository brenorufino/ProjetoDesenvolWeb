import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/shared/services/prof.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  professores: any[];
  urlUnicap =  'http://www.unicap.br/ppgd/wp-content/uploads/2016/12/marca_2025_altaresol.png';
  constructor(
    private servprof: ProfService
  ) { }

  ngOnInit() {
    this.professores = this.servprof.getProfessores();
  }

}
