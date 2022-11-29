import { environment } from './../environments/environments';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/usuario';
import { Buffer } from 'buffer';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = environment.apiURLBase + "/api/v1/usuarios"
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl; // http://localhost:8080/oauth/token'
  clienteID: string = environment.clienteId;
  clienteSecret: string = environment.clientSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      const token = JSON.parse(tokenString).access_token
      return token;
    }
    return null;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name;
      return usuario;
    } else {
      return null;
    }
  }

  isAuthenticated() : boolean {
    const token = this.obterToken();
    if(token){
      const expirated = this.jwtHelper.isTokenExpired(token)
      return !expirated;
    }
    return false;
  }

  salvar(usuario: Usuario) : Observable<any> {
    return this.http.post(this.apiURL, usuario);
  }

  tentarLogar(username: string, password: string) : Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')

      const base64Str = Buffer.from(`${this.clienteID}:${this.clienteSecret}`, 'utf8').toString('base64');

      const headers = {
        'Authorization' : 'Basic ' + base64Str,
        'Content-Type' : 'application/x-www-form-urlencoded'
      }

    return this.http.post(this.tokenURL, params.toString(), {headers} )
  }
}
