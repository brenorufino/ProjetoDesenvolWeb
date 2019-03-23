import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasComponent } from './disciplinas.component';
import { DisciplinasRoutingModule } from './disciplinas-routing.module';

@NgModule({
  declarations: [DisciplinasComponent],
  imports: [
    CommonModule,
    DisciplinasRoutingModule,

  ]
})
export class DisciplinasModule { }
