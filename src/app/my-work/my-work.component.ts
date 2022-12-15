import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  myworks: any[] = [
    {
      'title': 'Ring Of Fire',
      'technologies': ['Angular', 'TypeScript','Firebase','Material Design','HTML','CSS'],
      'description':'Popular playing cards drinking game also known under the name of Kings Cup or Circle Of Death. Play it with your friends as a multiplayer game.',
      'img':'ring-of-fire.png',
      'github':'konopatzki.info'
    },
    {
      'title': 'Sharkie',
      'technologies': ['JavaScript','OOP','Bootstrap','HTML','CSS'],
      'description':'Swim, slap and shoot bubbles based on object-oriented approach. Help Sharkie to find coins and poisons to fight against the evil killer whale.',
      'img':'sharkie.png',
      'github':'konopatzki.info'
    },
    {
      'title': 'Join',
      'technologies': ['JavaScript', 'Bootstrap','Firebase','HTML','CSS','Scrum'],
      'description':'Task manager inspired by the Kanban System to help working with Scrum. Create, edit and organize tasks using drag and drop functions, assign users and categories.',
      'img':'join.png',
      'github':'konopatzki.info'
    },
    {
      'title': 'Pokedex',
      'technologies': ['API', 'JavaScript','Bootstrap','HTML','CSS'],
      'description':'With the help of PokéAPI this library helps you find your Pokemon of interest. Look up general informations, base stats, abilites and most importantly: how to evolve it.',
      'img':'pokedex.png',
      'github':'konopatzki.info'
    }
  ];


}
