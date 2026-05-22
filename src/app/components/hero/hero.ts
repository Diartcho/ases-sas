import { Component } from '@angular/core';

const WHATSAPP_NUMBER = '573000000000';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  scrollToContact() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout() {
    document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToClients() {
    document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' });
  }

  openWhatsApp() {
    const text = encodeURIComponent('Hola, me interesa conocer más sobre los créditos por libranza que ofrecen.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  }
}
