import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

  getMailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Your email is required';
    }
    return this.email.hasError('email') ? 'Your email is not valid' : '';
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Your name is required';
    }
    return '';
  }

  getMsgErrorMessage() {
    if (this.message.hasError('required')) {
      return 'Your message is empty';
    }
    return '';
  }

  isTouched(validatedFormControl: any) {
    return validatedFormControl._pendingTouched;
  }

}
