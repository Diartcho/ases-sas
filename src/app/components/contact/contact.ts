import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'service_kq3wl8n';
const EMAILJS_TEMPLATE_ID = 'template_eklxa1h';
const EMAILJS_PUBLIC_KEY  = 'aG6UkuWtWScVqPEwm';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  sending = false;
  error = false;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(3)]],
      phone:     ['', [Validators.required, Validators.pattern('^[0-9]{7,10}$')]],
      email:     ['', [Validators.required, Validators.email]],
      tipo:      ['', Validators.required],
      pagaduria: ['', Validators.required],
      message:   ['', [Validators.required, Validators.minLength(10)]],
      terms:     [false, Validators.requiredTrue]
    });
  }

  get f() { return this.contactForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    this.sending = true;
    this.error = false;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: this.contactForm.value.name,
          phone:     this.contactForm.value.phone,
          email:     this.contactForm.value.email,
          tipo:      this.contactForm.value.tipo,
          pagaduria: this.contactForm.value.pagaduria,
          message:   this.contactForm.value.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
      setTimeout(() => (this.success = false), 6000);
    } catch {
      this.error = true;
      setTimeout(() => (this.error = false), 5000);
    } finally {
      this.sending = false;
    }
  }

  openWhatsApp() {
    window.open(
      'https://wa.me/573246446684?text=Hola%2C%20quiero%20solicitar%20una%20asesor%C3%ADa%20financiera',
      '_blank'
    );
  }
}
