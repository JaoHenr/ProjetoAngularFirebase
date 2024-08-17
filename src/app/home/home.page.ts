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

  segments: string = 'usuarios';

  usuarios =  [
    {
      nome: 'Neide',
      idade: '20',
      genero: 'Feminino',
      rotinas: [
        {
          dia: 'Segunda-Feira',
          treinos: [
            'Rosca Direta',
            'Cruxifixo',
            'Remada Sumô'
          ]
        },
        {
          dia: 'Quarta-Feira',
          treinos: [
            'Rosca invertida',
            'Pulley',
            'Remada Sentada'
          ]
        },
        {
          dia: 'Sexta-Feira',
          treinos: [
            'Supino Peito',
            'Bíceps Corda',
            'Bíceps Hulk Invertido'
          ]
        },
      ]
    },
    {
      
        nome: 'Diogo',
        idade: '30',
        genero: 'Masculino',
        rotinas: [
          {
            dia: 'Terça-Feira',
            treinos: [
              'Sumô Monge Budista',
              'Corrida de Biga',
              'Barra Homem Aranha'
            ]
          },
          {
            dia: 'Quinta-Feira',
            treinos: [
              'Levantamento do Conan',
              'Pulo do Mario',
              'Bíceps Tarzan'
            ]
          },
          {
            dia: 'Sabado-Feira',
            treinos: [
              'Sentada Dupla',
              'Flexão Romana',
              'Agachamento Germânico'
            ]
          },
        ]
    }
    
  ]

  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
  }

}
