import { Routes } from '@angular/router';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form';

export const routes: Routes = [
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosListaComponent },
  { path: 'novo', component: UsuarioFormComponent },
  { path: 'editar/:id', component: UsuarioFormComponent }
];
