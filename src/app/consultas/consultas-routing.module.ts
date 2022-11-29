import { ConsultasFormComponent } from './consultas-form/consultas-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'consultas', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'form', component: ConsultasFormComponent },
      { path: 'lista', component: ConsultasListaComponent },
      { path: '', redirectTo: '/consultas/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
