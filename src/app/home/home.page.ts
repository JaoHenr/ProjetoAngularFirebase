import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  aluno:any = {
    nome: null
  }
  alunos: any;

  constructor(
    public crudService: CrudService
  ){ 
    this.getAlunos();
  }

  salvar(){
    this.crudService.insert(this.aluno,'aluno');
    this.getAlunos();
    }

  deletar(aluno: any){
    this.crudService.remove(aluno.id,'aluno')
    .then(()=> {
      this.getAlunos();
    })

    this.getAlunos()
      
    }
    getAluno(){
      
    }

    getAlunos(){
      this.crudService.fetchAll('aluno')
      .then(response => {
      console.log(response);
      this.alunos = response;
    })
  }
}
