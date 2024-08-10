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
  // variaveis
  pessoa = {
    foto: 'https://img.freepik.com/premium-photo/stoic-man-statue-strong-stoic-man_358089-402.jpg',
    nome: 'Julianus Pastelus',
    objetivo: 'Programo com o C#',
    contato: {
      email: 'E-mail: JoaoHenr@gmai.com',
      telefone: 'Telefone: (15) 99756-7423',
      github: 'Github: github.com/basesweb',
      linkedin: 'LinkedIn: linkedIn.com/basesweb',
    },
    softskills: [
      'Trabalho em grupo',
      'Comunicação',
      'Resiliência',
      'Proatividade',
      'Liderança',
      'Criatividade',
      'Estoico'
    ],
    formacao: [
      {
      ano_inicio: '2023',
      ano_termino: '2024',
      instituicao: 'Etec Sales Gomes',
      curso: 'Desenvolvimento de Sistema'
     },
     {
      ano_inicio: '2025',
      ano_termino: '2028',
      instituicao: 'Fatec - Tatuí',
      curso: ' Análise e Desenvolvimento de Sistema'
     }
    ]
  }
  constructor(){ }
}
