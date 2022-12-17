import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  startlinks: any[] = [
    {
      name: 'assets/svg/gitlink-white.svg',
      svg: ''
    },
    {
      name: 'assets/svg/contact-white.svg',
      svg: ''
    },
    {
      name: 'assets/svg/linkedIn-white.svg',
      svg: ''
    }
  ];
}
