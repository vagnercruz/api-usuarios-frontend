import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuariosService, Usuario } from '../../services/usuarios';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-usuarios-lista',
  standalone: true,
  templateUrl: './usuarios-lista.html',
  styleUrls: ['./usuarios-lista.css'],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ]
})
export class UsuariosListaComponent {
  displayedColumns = ['nome', 'sobrenome', 'idade', 'profissao', 'cidade', 'estado', 'acoes'];
  dataSource = new MatTableDataSource<Usuario>([]);
  carregando = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuariosService: UsuariosService) {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.carregando = true;
    this.usuariosService.listar().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar usuários:', err);
        this.carregando = false;
      }
    });
  }

  aplicarFiltro(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  remover(id: string) {
    if (confirm('Deseja realmente remover este usuário?')) {
      this.usuariosService.remover(id).subscribe(() => {
        this.carregarUsuarios();
      });
    }
  }
}
