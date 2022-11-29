import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';


@NgModule({
  declarations: [
    ConsultasFormComponent,
    ConsultasListaComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule,
    RouterModule

  ], exports: [
    ConsultasFormComponent,
    ConsultasListaComponent
  ]
})
export class ConsultasModule { }
