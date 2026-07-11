import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE } from '../site';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="topbar label">Envíos a toda España · Diseño 100% personalizado</div>
    <div class="sticky-wrap">
      <header class="header">
        <a routerLink="/" class="brand" aria-label="PIQ3D, inicio">PIQ<span class="accent">3D</span></a>
        <a class="btn btn-accent cta" [href]="wa" target="_blank" rel="noopener">Pide tu presupuesto</a>
      </header>
      <nav class="nav" aria-label="Secciones">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
        <a routerLink="/trofeos" routerLinkActive="active">Trofeos</a>
        <a routerLink="/medallas" routerLinkActive="active">Medallas</a>
        <a routerLink="/merchandising" routerLinkActive="active">Merchandising</a>
      </nav>
    </div>
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
    .sticky-wrap {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(249, 249, 249, .85);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border-fine);
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px var(--margin-mobile) 6px;
    }
    .brand {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -.03em;
      transition: opacity .3s;
      &:hover { opacity: .7; }
    }
    .cta { min-height: 42px; padding: 10px 18px; font-size: 11px; }

    .nav {
      display: flex;
      gap: 22px;
      padding: 4px var(--margin-mobile) 10px;
      overflow-x: auto;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar { display: none; }
    }
    .nav a {
      position: relative;
      flex-shrink: 0;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      color: var(--on-surface-variant);
      padding-block: 4px;
      transition: color .3s var(--ease-out);

      /* subrayado que crece suavemente */
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        width: 100%;
        background: var(--accent);
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform .35s var(--ease-out);
      }

      &:hover { color: var(--on-surface); }
      &:hover::after { transform: scaleX(.5); }

      &.active { color: var(--on-surface); }
      &.active::after { transform: scaleX(1); }
    }

    @media (min-width: 768px) {
      .header { padding-inline: var(--margin-desktop); }
      .nav { padding-inline: var(--margin-desktop); gap: 30px; }
    }
  `,
})
export class HeaderComponent {
  readonly wa = SITE.whatsapp;
}
