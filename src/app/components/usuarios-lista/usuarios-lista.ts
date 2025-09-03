import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../services/usuarios';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  templateUrl: './usuarios-lista.html',
  imports: [CommonModule, RouterModule]
})
export class UsuariosListaComponent implements OnInit {
  // Remova a linha [x: string]: any;
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
    });
  }

  remover(id: string): void {
    this.UsuariosService.remover(id).subscribe({
      next: () => {
        this.carregar();
      },
      error: () => {
        this.erro = 'Erro ao remover usuário';
      }
    });
  }
}