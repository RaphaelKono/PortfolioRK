import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm: any;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  })

  getMailErrorMessage() {
    if (this.contactForm.controls.email.hasError('required')) {
      return 'Your email is required';
    }
    return this.contactForm.controls.email.hasError('email') ? 'Your email is not valid' : '';
  }

  getNameErrorMessage() {
    if (this.contactForm.controls.name.hasError('required')) {
      return 'Your name is required';
    }
    return '';
  }

  getMsgErrorMessage() {
    if (this.contactForm.controls.message.hasError('required')) {
      return 'Your message is empty';
    }
    return '';
  }

  isTouched(validatedFormControl: any) {
    return validatedFormControl._pendingTouched;
  }

  async sendMail() {
    if (this.contactForm.valid) {
      console.log('Sending mail', this.contactForm);
      this.contactForm.disable();
      let fd = new FormData();
      fd.append('name',this.contactForm.controls.name.value);
      fd.append('message',this.contactForm.controls.message.value);
      console.log(this.contactForm.controls.name.value);
      console.log(this.contactForm.controls.message.value);
      // await fetch(url,{
      //   method: 'POST',
      //   body: fd
      // });
      this.contactForm.enable();
    }
  }

}
