import { Component } from '@angular/core';

interface Client {
  name: string;
  description: string;
  image: string;
  color: string;
  lightBg: string;
  imgPosition: string;
  details: string[];
  pagaduriaText: string;
}

interface LogoItem {
  name: string;
  logo: string;
}

interface PagaduriaGroup {
  title: string;
  icon: 'education' | 'pension' | 'other';
  logos: LogoItem[];
  tags: string[];
}

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.html',
  styleUrl: './clients.css'
})
export class ClientsComponent {
  selected: Client | null = null;

  open(client: Client) { this.selected = client; }
  close() { this.selected = null; }

  requestAdvisory() {
    this.selected = null;
    setTimeout(() => {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }

  clients: Client[] = [
    {
      name: 'Pensionados',
      description: 'Créditos especializados para personas pensionadas con condiciones preferenciales hasta los 90 años.',
      image: 'img/pensionado.jpg.png',
      color: '#0D2B45',
      lightBg: '#E8EEF5',
      imgPosition: 'center 20%',
      details: [
        'Créditos hasta los 90 años de edad',
        'Descuento directo de mesada pensional',
        'Sin codeudores ni fiadores',
        'Tasas de interés competitivas en el mercado',
        'Desembolso rápido y sin trámites complicados',
        'Atención personalizada en todo el país'
      ],
      pagaduriaText: 'Trabajamos con las principales entidades pensionales del país: Colpensiones, Fopep, Cremil, Casur y Colfondos, entre otras.'
    },
    {
      name: 'Docentes',
      description: 'Soluciones crediticias para maestros vinculados a secretarías de educación a nivel nacional.',
      image: 'img/docente.jpg.png',
      color: '#1565C0',
      lightBg: '#DDEAF9',
      imgPosition: 'center 30%',
      details: [
        'Crédito por libranza con descuento de nómina',
        'Disponible para docentes activos y pensionados',
        'Plazos flexibles hasta 120 meses',
        'Sin consulta de centrales de riesgo en algunos casos',
        'Trámite 100% presencial o virtual',
        'Cobertura en secretarías de todo el país'
      ],
      pagaduriaText: 'Atendemos secretarías de educación en Cartagena, Bolívar, Atlántico, Magdalena y varios departamentos más a nivel nacional.'
    },
    {
      name: 'Fuerza Pública',
      description: 'Servicios financieros para policías, militares y miembros de la Armada Nacional colombiana.',
      image: 'img/fuerza-publica.jpg.png',
      color: '#1A4A73',
      lightBg: '#E2EBF4',
      imgPosition: 'center 15%',
      details: [
        'Crédito por libranza para personal activo y retirado',
        'Descuento directo de nómina institucional',
        'Sin codeudores requeridos',
        'Montos acordes al salario y capacidad de pago',
        'Proceso ágil con mínimos requisitos',
        'Asesoría especializada para personal uniformado'
      ],
      pagaduriaText: 'Brindamos servicios a miembros de la Policía Nacional, Ejército, Armada y Fuerza Aérea, tanto en actividad como retirados.'
    }
  ];

  pagaduriaGroups: PagaduriaGroup[] = [
    {
      title: 'Secretarías de Educación',
      icon: 'education',
      logos: [
        { name: 'SEM Cartagena', logo: 'img/Alcaldia cartagena 2025.png' },
        { name: 'SEM Bolívar', logo: 'img/logo_gober_horizontal_light.webp' },
      ],
      tags: ['SEM Atlántico', 'SEM Magdalena']
    },
    {
      title: 'Fondos Pensionales',
      icon: 'pension',
      logos: [
        { name: 'Colpensiones', logo: 'img/logo_colpensiones.png' },
        { name: 'Fopep', logo: 'img/forpep.png' },
        { name: 'Colfondos', logo: 'img/colfondos-1000x298-1.webp' },
        { name: 'Casur', logo: 'img/casur.png' },
        { name: 'Avanza', logo: 'img/avanza.png' },
      ],
      tags: ['Fiduprevisora', 'Cremil', 'Protección']
    },
    {
      title: 'Otras Pagadurías',
      icon: 'other',
      logos: [
        { name: 'Bolívar Primero', logo: 'img/bolivar-primero.png' },
        { name: 'Kala', logo: 'img/kala.png' },
        { name: 'KOA', logo: 'img/KOA.webp' },
        { name: 'Solux', logo: 'img/Solux.png' },
        { name: 'Banco de Bogotá', logo: 'img/Banco-De-Bogota-Logo-Mark-PNG-thumb.png' },
      ],
      tags: []
    }
  ];
}
