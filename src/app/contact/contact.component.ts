import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm: any;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, this.noWhitespaceValidator])
  });

  submittedOnce=false;
  backToTopHover = false;

  constructor(private _snackBar: MatSnackBar) {}

  getMailErrorMessage() {
    if (this.contactForm.controls.email.hasError('required')) {
      return 'Your email is required';
    }
    return this.contactForm.controls.email.hasError('email') ? 'Your email is not valid' : '';
  }

  getNameErrorMessage() {
    if (this.contactForm.controls.name.hasError('required') || this.contactForm.controls.name.hasError('whitespace')) {
      return 'Your name is required';
    }
    return '';
  }

  getMsgErrorMessage() {
    if (this.contactForm.controls.message.hasError('required') || this.contactForm.controls.message.hasError('whitespace')) {
      return 'Your message is empty';
    }
    return '';
  }

  isTouched(validatedFormControl: any) {
    return validatedFormControl._pendingTouched;
  }

  async sendMail() {
    this.submittedOnce = true;
    if (this.contactForm.valid) {
      this.contactForm.disable();
      let fd = new FormData();
      fd.append('name',this.contactForm.controls.name.value);
      fd.append('message',this.contactForm.controls.message.value);
      fd.append('email',this.contactForm.controls.email.value);
      await fetch('https://konopatzki.info/send_mail.php',{
        method: 'POST',
        body: fd
      });
      this.contactForm.enable();
      this.openSnackBar('Message has been sent', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  setHover(bool: boolean){
    this.backToTopHover = bool;
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}

