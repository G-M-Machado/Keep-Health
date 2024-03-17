import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    emailUsuario: '',
    senha: ''
  };

  constructor(private router: Router) {}

  entrar() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let usuario = usuarios.find((u: any) => u.emailUsuario === this.login.emailUsuario && u.senha === this.login.senha);

      if (usuario) {
        this.router.navigate(['/home']);
      } else {
        alert('Usuário ou senha inválidos')
      }
  }

  recSenha() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    let usuario = usuarios.find((u: any) => u.emailUsuario === this.login.emailUsuario && u.senha === this.login.senha);

      if (usuario) {
        usuario.senha = 'a1b2c4d4'
        localStorage.setItem('usuarios', JSON.stringify(usuario))
        alert(`${usuario}, sua senha foi alterada para a1b2c4d4`)
      } else {
        alert('Usuário não encontrado')
      }
  }
}