import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form';
import { UsuariosListaComponent } from './components/usuarios-lista/usuarios-lista';

const routes: Routes = [
  { path: '', component: UsuariosListaComponent },
  { path: 'novo', component: UsuarioFormComponent },
  { path: 'editar/:id', component: UsuarioFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
