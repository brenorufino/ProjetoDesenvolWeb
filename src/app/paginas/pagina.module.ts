import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaComponent } from './pagina.component';
import { PaginaRoutingModule } from './pagina-routing.module';
import { HeaderNovoComponent } from '../layout/components/header-novo/header-novo.component';
import { SidebarNovoComponent } from '../layout/components/sidebar-novo/sidebar-novo.component';


@NgModule({
    imports: [
        CommonModule,
        PaginaRoutingModule,
        NgbDropdownModule
    ],
    declarations: [PaginaComponent, HeaderNovoComponent, SidebarNovoComponent]
})
export class PaginaModule {}
