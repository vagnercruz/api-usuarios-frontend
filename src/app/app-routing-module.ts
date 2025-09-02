import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsuariosListaComponent },
  { path: 'novo', component: UsuarioFormComponent },
  { path: 'editar/:id', component: UsuarioFormComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
