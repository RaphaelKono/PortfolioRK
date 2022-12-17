import { Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FloatLabelType} from '@angular/material/form-field';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
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

  getInvalidIcon(validatedFormControl: any){
    if(validatedFormControl.hasError('required')){
      console.log('spuck icon aus');
      return '<object class="textarea-icon" type="image/svg+xml" data="assets/svg/invalid.svg"></object>';
    }
    return '';
  }
}
