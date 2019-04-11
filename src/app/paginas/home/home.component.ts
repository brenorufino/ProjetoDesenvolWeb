import { Component, OnInit } from '@angular/core';
import { ProfessoresService } from 'src/app/shared/services/professores.service';
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
    private servprof: ProfessoresService
  ) { }

  ngOnInit() {
    this.servprof.getListaProfessores()
    .subscribe({
      next: response => this.professores = response
    });
  }

}
