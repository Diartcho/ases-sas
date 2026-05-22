import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  current = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  slides = [
    {
      image: 'img/personas-dandose-mano-fondo-acuerdo-comercial_53876-104763.jpg',
      title: 'Crédito por libranza',
      subtitle: 'Obtén tu crédito con descuento directo de nómina o pensión. Cuotas fijas y tasas competitivas.',
      cta: 'Solicitar asesoría',
      link: 'contacto'
    },
    {
      image: 'img/corporativa1.avif',
      title: 'Equipo a tu servicio',
      subtitle: 'Nuestros asesores te acompañan en cada paso para encontrar la mejor solución financiera.',
      cta: 'Quiénes somos',
      link: 'quienes-somos'
    },
    {
      image: 'img/vision-conceptual-gente-negocios-reunion-personal-corporativo_31965-29653.jpg',
      title: 'Nuestros clientes',
      subtitle: 'Atendemos pensionados, docentes y fuerza pública en todo el territorio colombiano.',
      cta: 'Ver clientes',
      link: 'clientes'
    },
    {
      image: 'img/corporativa2.avif',
      title: 'Soluciones financieras',
      subtitle: 'Asesoría financiera, refinanciación, compra de cartera y análisis de perfil crediticio.',
      cta: 'Ver servicios',
      link: 'servicios'
    }
  ];

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    this.timer = setInterval(() => this.next(), 4500);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  next() { this.current = (this.current + 1) % this.slides.length; }
  prev() { this.current = (this.current - 1 + this.slides.length) % this.slides.length; }
  goTo(index: number) { this.current = index; }
}
