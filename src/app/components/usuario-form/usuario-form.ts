import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios';

const UFS = [
  'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA',
  'MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN',
  'RS','RO','RR','SC','SP','SE','TO'
];

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.html'
})
export class UsuarioFormComponent implements OnInit {
  @Input() usuarioId?: string;
  ufs = UFS;
  mensagem: string | null = null;

  form: any;

  constructor(private fb: FormBuilder, private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      idade: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
      profissao: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]]
    });

    if (this.usuarioId) {
      this.usuariosService.buscar(this.usuarioId).subscribe(u => this.form.patchValue(u));
    }
  }

  salvar(): void {
    const dados = this.form.value as any;
    if (this.usuarioId) {
      this.usuariosService.atualizar(this.usuarioId, dados).subscribe({
        next: () => this.mensagem = 'Usuário atualizado com sucesso',
        error: () => this.mensagem = 'Erro ao atualizar usuário'
      });
    } else {
      this.usuariosService.criar(dados).subscribe({
        next: () => this.mensagem = 'Usuário criado com sucesso',
        error: () => this.mensagem = 'Erro ao criar usuário'
      });
    }
  }
}
