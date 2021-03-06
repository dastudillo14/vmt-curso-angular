import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private _listaClientes:Cliente[] = [];

  get listaClientes(){
    return this._listaClientes;
  }

  constructor(
    private http:HttpClient
  ) { }

  consultaClientes(){
    this.http.get<Cliente[]>('http://localhost:3001/clientes')
    .subscribe((res)=>{
      console.log('res ', res)
      this._listaClientes= res;
    })
  }

  registrarCliente(cliente:Cliente){
    cliente.estado = true;
    return this.http.post<Cliente>('http://localhost:3001/clientes',cliente);
  }


}
