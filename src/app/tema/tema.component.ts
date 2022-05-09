import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit() { //inicia a página temas
    if(environment.token == "") {
      this.router.navigate(["/login"])
    }

    this.findAllTemas() //Toda vez que entrar na página de tema, lista todos os temas automaticamente
  }

  findAllTemas() {
    this.temaService.getAllTema().subscribe(
    (resp: Tema[]) => { //vai acessar o temaService, pegar o getAll que vai retornar um array de temas
      this.listaTemas = resp
    })
  }

  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp: Tema) => { //subscribe transforma o json em typescript
      this.tema = resp
      alert("Tema cadastrado com sucesso")
      this.findAllTemas() //para trazer a lista atualizada
      this.tema = new Tema() //zera o campo
    })
  }

}
