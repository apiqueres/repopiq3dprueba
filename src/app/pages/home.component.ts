import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SITE } from '../site';
import { RevealDirective } from '../shared/reveal.directive';
import { ParallaxDirective } from '../shared/parallax.directive';

interface TrustItem {
  icon: SafeHtml;
  title: string;
  copy: string;
}

const ICONS = {
  pen: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  printer: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11l8-4.5M12 11v9M12 11L4 6.5"/></svg>',
  truck: '<svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="14" height="12" rx="1.5"/><path d="M15 9h4l3 3v5h-7"/><circle cx="6" cy="19" r="1.8"/><circle cx="18" cy="19" r="1.8"/></svg>',
};

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective, ParallaxDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly site = SITE;

  readonly qrs = [
    { img: 'assets/img/trofeos/_carta_luisvives.png', name: 'Soporte carta', tag: 'Diseño orgánico' },
    { img: 'assets/img/trofeos/_carta_paelles.png', name: 'Soporte evento', tag: 'Minimalismo puro' },
    { img: 'assets/img/merch/_carta_llaveros.jpeg', name: 'Carta llaveros', tag: 'Variedad cromática' },
  ];

  readonly trust: TrustItem[] = [
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(ICONS.pen),
      title: 'Diseño propio',
      copy: 'Creatividad sin límites desde nuestro estudio en Valencia.',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(ICONS.printer),
      title: 'Fabricación en Valencia',
      copy: 'Controlamos todo el proceso de impresión y acabado final.',
    },
    {
      icon: this.sanitizer.bypassSecurityTrustHtml(ICONS.truck),
      title: 'Entrega rápida',
      copy: 'Logística optimizada para envíos en tiempo récord a toda España.',
    },
  ];
}
