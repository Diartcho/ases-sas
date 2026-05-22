import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Asesoría Financiera',
      description: 'Analizamos tu situación actual y diseñamos el mejor plan para optimizar tu vida financiera de forma personalizada.',
      icon: 'advice',
      image: 'img/atencion.jpg'
    },
    {
      title: 'Refinanciación de Créditos',
      description: 'Reestructuramos tus obligaciones actuales para reducir cuotas y mejorar las condiciones de tu crédito.',
      icon: 'refinance',
      image: 'img/tasas.jpg'
    },
    {
      title: 'Compra de Cartera',
      description: 'Consolidamos tus deudas en una sola cuota con mejores tasas y plazos más convenientes para tu bolsillo.',
      icon: 'portfolio',
      image: 'img/cobertura.jpg'
    },
    {
      title: 'Análisis de Perfil Crediticio',
      description: 'Evaluamos tu historial y capacidad de pago para encontrar la solución financiera ideal para tu perfil.',
      icon: 'analysis',
      image: 'img/analisis-crediticio.png'
    }
  ];
}
