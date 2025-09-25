import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, NgIf],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  fullName: string = '';
  email: string = '';
  emailStatus: boolean = false;
  message: string = '';
  btnDefault = true;
  btnLoading = false;
  btnSuccess = false;
  submitted = false;

  constructor(private cdr: ChangeDetectorRef) { }

  formSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;

    const isValid = this.fullName !== '' && this.email !== '' && this.message !== '';
    this.emailStatus = this.email !== '' && !this.validateEmail(this.email);
    if (!isValid) return;
    if(this.emailStatus) return;

    const params = {
      user_name: this.fullName,
      user_email: this.email,
      user_message: this.message,
    }

    emailjs
      .send('service_5oxskh4', 'template_ubdp51h', params, 'wbStjN6pVz7MYmF3r')
      .then((res) => {
        this.resetForm();
      })
      .catch((err) =>
        console.error('Error sending email:', err)
      );
  }

  private resetForm() {
    this.btnDefault = false;
    this.btnLoading = true;
    setTimeout(() => {
      this.btnLoading = false;
      this.btnSuccess = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.btnSuccess = false;
        this.btnDefault = true;
        this.fullName = '';
        this.email = '';
        this.message = '';
        this.submitted = false;
        this.cdr.detectChanges();
      }, 1000);
    }, 1000);

    this.cdr.detectChanges();
  }
  private validateEmail(email: string): boolean {
    // sadə regex validasiya
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}
