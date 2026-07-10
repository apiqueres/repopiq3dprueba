import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div class="topbar label">Envíos a toda España · Diseño 100% personalizado</div>
    <header class="header">
      <a routerLink="/" class="brand" aria-label="PIQ3D, inicio">PIQ3D</a>
      <a class="btn btn-accent cta" [href]="wa" target="_blank" rel="noopener">Pide tu presupuesto</a>
    </header>
  `,
  styles: `
    .topbar {
      background: var(--primary);
      color: #fff;
      text-align: center;
      padding: 8px var(--margin-mobile);
      font-size: 10.5px;
      letter-spacing: .14em;
    }
    .header {
      position: sticky;
      top: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px var(--margin-mobile);
      background: rgba(249, 249, 249, .82);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border-fine);
    }
    .brand {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -.03em;
      transition: opacity .3s;
      &:hover { opacity: .7; }
    }
    .cta { min-height: 42px; padding: 10px 18px; font-size: 11px; }
    @media (min-width: 768px) {
      .header { padding-inline: var(--margin-desktop); }
    }
  `,
})
export class HeaderComponent {
  readonly wa = SITE.whatsapp;
}
