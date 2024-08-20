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

  treinos = [
    {
      nome: 'Corrida de Biga Romana',
      series: 3,
      foto: 'https://onjornal.com/site/arquivos/imagens/noticias/grande/20231126141658esportes-que-ja-foram-populares-no-passado-mas-que-acabaram-sendo-extintos-2.jpg',
    },
    {
      nome: 'Agachamento Sumô',
      series: 3,
      foto: 'https://blog.totalpass.com.br/wp-content/uploads/2024/04/agachamento-sumo.jpg',
    }
  ]
  constructor(){}

  trocar(event: any){
    this.segments = event.detail.value;
  }

}
