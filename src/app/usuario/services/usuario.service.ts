import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  login(usuario:string , contrasenia:string){  
    //llamada al apiRest
    if( usuario.trim() === 'dantee' && contrasenia.trim() ==='1234'){
      localStorage.setItem('token', 'abc1234');
      return true;     
    }
    return false;
  }
}
