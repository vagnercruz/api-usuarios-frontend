import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario{
  id: string;
  nome: string;
  sobrenome: string;
  idade: number;
  profissao: string;
  cidade: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
   private apiUrl = 'http://localhost:3333/usuarios';
   erro: string | null = null;

   constructor(private http: HttpClient) {}

   listar(): Observable<Usuario[]> {
     return this.http.get<Usuario[]>(this.apiUrl);
   }

   buscar(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

   criar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  atualizar(id: string, usuario: Omit<Usuario, 'id'>): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

remover(id: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

confirmarRemocao(id: string) {
  if (confirm('Tem certeza que deseja excluir este usuário?')) {
    this.remover(id).subscribe({
      next: () => {},
      error: () => this.erro = 'Erro ao excluir usuário'
    });
  }
}
}  
