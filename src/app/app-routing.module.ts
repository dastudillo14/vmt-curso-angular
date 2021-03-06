import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
   path:'usuario' , loadChildren:()=>import('./usuario/usuario.module').then( m=>m.UsuarioModule )
  },
  {
    path:'clientes' , loadChildren:()=>import('./clientes/clientes.module').then( m=>m.ClientesModule )
  },
  {
    path:'**', redirectTo:'clientes'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
