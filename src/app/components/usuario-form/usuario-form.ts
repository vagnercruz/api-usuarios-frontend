import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UsuariosService, Usuario } from '../../services/usuarios';
import { Observable } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  templateUrl: './usuario-form.html',
  styleUrls: ['./usuario-form.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class UsuarioFormComponent implements OnInit {
  form!: FormGroup;
  usuarioId: string | null = null;
  usuario$!: Observable<Usuario | null>;

  estados: string[] = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];
  

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // inicializa o form aqui
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2)]],
      idade: [null as number | null, [Validators.required, Validators.min(0), Validators.max(120)]],
      profissao: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });

    // se for edição
    this.usuario$ = this.route.paramMap.pipe(
      filter(params => params.has('id')),
      switchMap(params => {
        this.usuarioId = params.get('id');
        return this.usuariosService.buscar(this.usuarioId!);
      })
    );

    this.usuario$.subscribe(usuario => {
      if (usuario) {
        this.form.patchValue(usuario);
      }
    });
  }

  salvar() {
    if (this.form.invalid) return;

    const dados = this.form.getRawValue() as Omit<Usuario, 'id'>;

    if (this.usuarioId) {
      this.usuariosService.atualizar(this.usuarioId, dados).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuariosService.criar(dados).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}
