import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaComponent } from './pagina.component';

const routes: Routes = [
    {
        path: '',
        component: PaginaComponent,
        children: [
            { path: '', redirectTo: 'dashboard-novo', pathMatch: 'prefix' },
            { path: 'dashboard-novo', loadChildren: './dashboard-novo/dashboard-novo.module#DashboardNovoModule' },
            { path: 'inovacao', loadChildren: './inovacao-component/inovacao-page.module#InovacaoPageModule' },
            { path: 'gestao-ideias', loadChildren: './gestao-ideias/gestao-ideias.module#GestaoIdeiasModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'professor', loadChildren: './disciplinas/disciplinas.module#DisciplinasModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PaginaRoutingModule {}
