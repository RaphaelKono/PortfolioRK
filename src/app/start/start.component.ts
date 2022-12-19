import { Component } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent {

  startlinks: any[] = [
    {
      name: 'assets/svg/gitlink.svg',
      url: 'https://github.com/RaphaelKono'
    },
    {
      name: 'assets/svg/contact.svg',
      url: '#contact'
    },
    {
      name: 'assets/svg/linkedIn.svg',
      url: ''
    }
  ];
}
