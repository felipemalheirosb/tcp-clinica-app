import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { ConsultasModule } from './consultas/consultas.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { FuncionariosService } from './funcionarios.service';
import { PacientesService } from './pacientes.service';
import { TemplateModule } from './template/template.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultaService } from './consulta.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    PacientesModule,
    FuncionariosModule,
    ConsultasModule,
    FormsModule
  ],
  providers: [
    PacientesService,
    FuncionariosService,
    ConsultaService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
