import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MEDALLAS, MERCH, Product, QRS, SITE, TROFEOS } from '../site';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';
import { ProductGridComponent } from '../shared/product-grid.component';

interface CategoryContent {
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  intro: string;
  heroImg: string;
  products: Product[];
  steps: { title: string; copy: string }[];
  quote: string;
  quoteImg: string;
}

const CATEGORIES: Record<string, CategoryContent> = {
  trofeos: {
    eyebrow: 'Excelencia en impresión 3D',
    titleTop: 'Trofeos que cuentan',
    titleAccent: 'victorias',
    intro:
      'Diseño y fabricación aditiva de alta precisión para eventos que buscan la excelencia. Piezas únicas que perduran en el tiempo.',
    heroImg: 'assets/img/trofeos/07_trofeu_puchades.png',
    products: TROFEOS,
    steps: [
      { title: 'Nos cuentas tu idea', copy: 'Analizamos tus necesidades, el propósito del evento y el estilo que buscas transmitir.' },
      { title: 'Diseñamos en 3D', copy: 'Creamos prototipos digitales de alta fidelidad para que visualices el resultado final antes de imprimir.' },
      { title: 'Fabricamos y entregamos', copy: 'Tecnología de fabricación aditiva de última generación y acabados artesanales.' },
    ],
    quote: 'El trofeo superó nuestras expectativas. Increíble.',
    quoteImg: 'assets/img/trofeos/3x3xiques_cita.jpeg',
  },
  medallas: {
    eyebrow: 'Categoría medallas',
    titleTop: 'Medallas que',
    titleAccent: 'se ganan',
    intro:
      'Detrás de cada medalla hay meses de esfuerzo. Diseñamos piezas que tus participantes querrán lucir mucho después de cruzar la meta: haz que tu evento se recuerde.',
    heroImg: 'assets/img/medallas/bannerseccionmedallas.jpeg',
    products: MEDALLAS,
    steps: [
      { title: 'Nos cuentas tu evento', copy: 'Compartes tu visión, el número de participantes y el estilo que buscas para tus medallas.' },
      { title: 'Diseñamos con tu logo', copy: 'Nuestros diseñadores crean un modelo 3D exclusivo integrando tu identidad visual y relieves.' },
      { title: 'Entregamos', copy: 'Producción aditiva industrial con control de calidad unitario y envío directo a tu sede.' },
    ],
    quote: 'La calidad de las medallas dejó al club encantado.',
    quoteImg: 'assets/img/medallas/medallachsueca.jpeg',
  },
  merchandising: {
    eyebrow: 'Merchandising premium',
    titleTop: 'Detalles que',
    titleAccent: 'enamoran',
    intro:
      'Llaveros, imanes, figuritas y piezas corporativas con acabados premium y diseño totalmente personalizado para tu marca o evento.',
    heroImg: 'assets/img/merch/01_llaveros_club.png',
    products: MERCH,
    steps: [
      { title: 'Nos cuentas tu idea', copy: 'Marca, club, boda o falla: buscamos el detalle perfecto para tu ocasión.' },
      { title: 'Diseñamos la pieza', copy: 'Modelamos en 3D cada detalle integrando tu logotipo y colores corporativos.' },
      { title: 'Producimos en serie', copy: 'Desde 10 hasta miles de unidades con calidad constante y plazos cortos.' },
    ],
    quote: 'Los llaveros volaron el primer día del torneo.',
    quoteImg: 'assets/img/merch/03_llaveros.png',
  },
  qrs: {
    eyebrow: 'QRs personalizados',
    titleTop: 'La primera impresión',
    titleAccent: 'cuenta',
    intro:
      'Soportes QR y NFC impresos en 3D para restaurantes, bares y negocios. Haz que tu carta digital sea parte de la decoración, con tu logo y tus colores.',
    heroImg: 'assets/img/qr/caquitin.png',
    products: QRS,
    steps: [
      { title: 'Nos cuentas tu negocio', copy: 'Tu carta, tu estilo y el ambiente de tu local: buscamos el soporte que mejor encaje.' },
      { title: 'Diseñamos tu soporte', copy: 'Integramos tu logotipo, tus colores y el QR en relieve; con chip NFC opcional.' },
      { title: 'Imprimimos y entregamos', copy: 'Piezas duraderas y fáciles de limpiar, listas para colocar en cada mesa.' },
    ],
    quote: 'Los clientes escanean la carta y siempre preguntan por el soporte.',
    quoteImg: 'assets/img/qr/sushiroom_delantero.png',
  },
};

@Component({
  selector: 'app-categoria',
  imports: [RouterLink, RevealDirective, ParallaxDirective, ProductGridComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss',
})
export class CategoriaComponent {
  private readonly route = inject(ActivatedRoute);

  readonly site = SITE;

  private readonly slug = toSignal(this.route.data.pipe(map(d => d['slug'] as string)), {
    initialValue: 'trofeos',
  });

  readonly c = computed(() => CATEGORIES[this.slug()] ?? CATEGORIES['trofeos']);
}
