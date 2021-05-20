import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event?.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event?.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuario

    if(this.usuario.nome == ''){
      this.alertas.showAlertDanger('Está faltando seu nome')
    }

    if(this.usuario.usuario == ''){
      this.alertas.showAlertDanger('Está faltando seu usuario')
    }

    if(this.usuario.tipo == 'Selecione um tipo de usuário'){
      this.alertas.showAlertInfo('Escolha uma tipo de usuario')
    }

    if(this.usuario.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('A senha está incorreta.')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
      },erro =>{
        if(erro.status == 500){
          this.alertas.showAlertDanger('ERRO! Verificar dados cadastados.')
        }
        if(erro.status == 401){
          this.alertas.showAlertDanger('Este usuario já é existente tente outro.')
        }
      })
    }

  }
}
