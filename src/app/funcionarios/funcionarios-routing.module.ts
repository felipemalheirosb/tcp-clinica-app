import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form.component';
import { FuncionariosListaComponent } from './funcionarios-lista/funcionarios-lista.component';

const routes: Routes = [
  {
    path: 'funcionarios', component: LayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'form', component: FuncionariosFormComponent },
      { path: 'form/:id', component: FuncionariosFormComponent },
      { path: 'lista', component: FuncionariosListaComponent },
      { path: '', redirectTo: '/funcionarios/lista', pathMatch: 'full'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
