import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule], 
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl(''),
    dataNascimento: new FormControl(''),
    emailUsuario: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl(''),
  });




  cadastrar() {
    let validacaoSenha = this.form.value.senha === this.form.value.confirmarSenha;
    let validacao = this.form.value.nome && this.form.value.emailUsuario && this.form.value.dataNascimento;
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let usuarioExistente = usuarios.find((u: any) => u.emailUsuario === this.form.value.emailUsuario && u.nome === this.form.value.nome);

      if (usuarioExistente) {
        alert('Usuário já cadastrado')
      } else if (!validacao) {
        alert('Preencha todos os campos')
      } else if (!validacaoSenha) {
        alert('Confirme sua senha')
      } else {
        const usuario = {
          emailUsuario: this.form.value.emailUsuario,
          senha: this.form.value.senha,
          nome: this.form.value.nome,
          Nascimento: this.form.value.dataNascimento
        }
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
      }
  }
}