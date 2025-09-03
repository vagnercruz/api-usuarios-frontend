import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../services/usuarios';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.html',
  imports: [NgIf],
})
export class UsuariosListaComponent implements OnInit {
[x: string]: any;
  usuarios: Usuario[] = [];
  carregando = false;
  erro: string | null = null;

  constructor(private UsuariosService: UsuariosService) {}

  ngOnInit(): void {
      this.carregar();
  }

  carregar() {
    this.carregando = true;
    this.UsuariosService.listar().subscribe({
      next: (dados) => {
        this.usuarios = dados;
        this.carregando = false;
      },
      error: (erro) => {
        this.erro = 'Erro ao carregar usuários';
        this.carregando = false;
      }
    })
  }
}  
export class UsuariosLista {

}
