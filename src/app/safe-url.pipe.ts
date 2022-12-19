import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer){

  }

  transform(value: string, type: string) {
    switch (type) {
      case 'html':
        // console.log(this._sanitizer.bypassSecurityTrustHtml(value));
        return this._sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this._sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this._sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        // console.log(this._sanitizer.bypassSecurityTrustUrl(value));
        return this._sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        // console.log(this._sanitizer.bypassSecurityTrustResourceUrl(value));
        return this._sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        return this._sanitizer.bypassSecurityTrustHtml(value);
    }
  }

}
