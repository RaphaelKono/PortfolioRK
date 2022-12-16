import { Component, Pipe, PipeTransform, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent {

  startlinks: any[] = [
    {
      name: 'gitlink.svg',
      url: ''
    },
    {
      name: 'contact.svg',
      url: ''
    },
    {
      name: 'linkedIn.svg',
      url: ''
    }];

  constructor(public _sanitizer: DomSanitizer) { }

  transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html':
        return this._sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this._sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this._sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        console.log(this._sanitizer.bypassSecurityTrustUrl(value));
        return this._sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
  }

  photoURL(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
