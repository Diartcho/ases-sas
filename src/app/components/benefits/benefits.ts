import { Component } from '@angular/core';

interface Benefit {
  title: string;
  description: string;
  icon: string;
  image?: string;
}

interface Ally {
  name: string;
  image: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: './benefits.html',
  styleUrl: './benefits.css'
})
export class BenefitsComponent {
  current = 0;

  get leftIdx(): number {
    return (this.current - 1 + this.benefits.length) % this.benefits.length;
  }
  get rightIdx(): number {
    return (this.current + 1) % this.benefits.length;
  }

  next() { this.current = (this.current + 1) % this.benefits.length; }
  prev() { this.current = (this.current - 1 + this.benefits.length) % this.benefits.length; }
  goTo(i: number) { this.current = i; }

  benefits: Benefit[] = [
    {
      title: 'Tasas Competitivas',
      description: 'Accede a las mejores tasas del mercado gracias a nuestras alianzas estratégicas con entidades financieras reconocidas.',
      icon: 'rate',
      image: 'img/corporativa3.avif'
    },
    {
      title: 'Atención Personalizada',
      description: 'Cada cliente recibe un trato único y una asesoría adaptada a sus necesidades y perfil financiero específico.',
      icon: 'personal',
      image: 'img/corporativa4.avif'
    },
    {
      title: 'Procesos Rápidos',
      description: 'Tramitamos tus solicitudes de manera ágil para que obtengas respuesta y desembolso en el menor tiempo posible.',
      icon: 'fast',
      image: 'img/manos-empresarios-mesa-madera-documentos-borradores_176420-370.jpg'
    },
    {
      title: 'Alianzas Estratégicas',
      description: 'Respaldados por aliados del sector financiero: KOA, Avanza, Solux y Kala.',
      icon: 'alliance',
      image: 'img/apreton-manos-empresarial-socios_53876-96139(1).jpg'
    },
    {
      title: 'Sin Codeudores',
      description: 'Nuestros créditos por libranza no requieren codeudores gracias al descuento directo de nómina o pensión.',
      icon: 'shield',
      image: 'img/sin-codeudores-ia.png'
    },
  ];

  allies: Ally[] = [
    { name: 'KOA', image: 'img/KOA.webp' },
    { name: 'Avanza', image: 'img/avanza.png' },
    { name: 'Solux', image: 'img/Solux.png' },
    { name: 'Kala', image: 'img/kala.png' },
  ];
}
