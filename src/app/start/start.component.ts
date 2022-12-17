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
      url: ''
    },
    {
      name: 'assets/svg/contact.svg',
      url: ''
    },
    {
      name: 'assets/svg/linkedIn.svg',
      url: ''
    }
  ];
}
