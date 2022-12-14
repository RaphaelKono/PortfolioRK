import { Component, Pipe, PipeTransform, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

@Inject({
  pipetransform: 'nothing'
})

export class StartComponent {
  constructor(public pipe: Pipe, public pipetransform: PipeTransform){}
  startlinks: any[] = [
    {
      name: 'gitlink',
      url: ''
    },
    {
      name: 'contact',
      url: ''
    },
    {
      name: 'gitlinkedInlink',
      url: ''
    }];
}
