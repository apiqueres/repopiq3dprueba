import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MEDALLAS, MERCH, Product, SITE, TROFEOS } from '../site';
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
  quoteAuthor: string;
  quoteImg: string;
}

const CATEGORIES: Record<string, CategoryContent> = {
  trofeos: {
    eyebrow: 'Excelencia en impresión 3D',
    titleTop: 'Trofeos que cuentan',
    titleAccent: 'victorias',
    intro:
      'Diseño y fabricación aditiva de alta precisión para eventos que buscan la excelencia. Piezas únicas que perduran en el tiempo.',
    heroImg: 'assets/img/trofeos/09_fibravalencia_alaquas.png',
    products: TROFEOS,
    steps: [
      { title: 'Nos cuentas tu idea', copy: 'Analizamos tus necesidades, el propósito del evento y el estilo que buscas transmitir.' },
      { title: 'Diseñamos en 3D', copy: 'Creamos prototipos digitales de alta fidelidad para que visualices el resultado final antes de imprimir.' },
      { title: 'Fabricamos y entregamos', copy: 'Tecnología de fabricación aditiva de última generación y acabados artesanales.' },
    ],
    quote: '"El trofeo superó nuestras expectativas. Increíble."',
    quoteAuthor: 'Director de eventos · Torneo 3x3',
    quoteImg: 'assets/img/trofeos/trofeos3x3.jpeg',
  },
  medallas: {
    eyebrow: 'Categoría medallas',
    titleTop: 'Medallas que',
    titleAccent: 'se ganan',
    intro:
      'Diseño y fabricación aditiva de alta precisión para eventos que buscan la excelencia. Transformamos el esfuerzo en objetos de deseo.',
    heroImg: 'assets/img/medallas/medallas_partetrasera.png',
    products: MEDALLAS,
    steps: [
      { title: 'Nos cuentas tu evento', copy: 'Compartes tu visión, el número de participantes y el estilo que buscas para tus medallas.' },
      { title: 'Diseñamos con tu logo', copy: 'Nuestros diseñadores crean un modelo 3D exclusivo integrando tu identidad visual y relieves.' },
      { title: 'Entregamos', copy: 'Producción aditiva industrial con control de calidad unitario y envío directo a tu sede.' },
    ],
    quote: '"La calidad de las medallas dejó al club encantado."',
    quoteAuthor: 'Organización · CH Sueca Handbol',
    quoteImg: 'assets/img/medallas/01_ch_sueca_handbol_tall.png',
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
    quote: '"Los llaveros volaron el primer día del torneo."',
    quoteAuthor: 'Club deportivo · Valencia',
    quoteImg: 'assets/img/merch/whatsapp_image_2026-05-28_at_13.52.10.jpeg',
  },
};

@Component({
  selector: 'app-categoria',
  imports: [RevealDirective, ParallaxDirective, ProductGridComponent],
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
