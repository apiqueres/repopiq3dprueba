import { Component } from '@angular/core';
import { SITE } from '../site';

@Component({
  selector: 'app-whatsapp-fab',
  template: `
    <a class="fab" [href]="wa" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.94L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm5.77 14.06c-.24.68-1.4 1.3-1.93 1.35-.52.05-1.01.24-3.4-.7-2.87-1.13-4.7-4.06-4.84-4.25-.14-.19-1.16-1.55-1.16-2.95 0-1.4.74-2.09 1-2.37.26-.29.57-.36.76-.36l.55.01c.18 0 .41-.06.64.49.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.09.19-.14.3-.28.47l-.43.5c-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.1 1.63.77 1.9.91.28.14.47.21.54.33.06.12.06.68-.17 1.36Z"/>
      </svg>
    </a>
  `,
  styles: `
    .fab {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 60;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: var(--wa-green);
      color: #fff;
      box-shadow: 0 10px 30px -8px rgba(37, 211, 102, .65);
      transition: transform .35s var(--ease-out), box-shadow .35s var(--ease-out);
      animation: fab-pop .6s var(--ease-out) both;
      animation-delay: .8s;
    }
    .fab:hover { transform: translateY(-3px) scale(1.05); }
    .fab:active { transform: scale(.94); }
    @keyframes fab-pop {
      from { opacity: 0; transform: scale(.4); }
      to { opacity: 1; transform: scale(1); }
    }
    @media (prefers-reduced-motion: reduce) { .fab { animation: none; } }
  `,
})
export class WhatsappFabComponent {
  readonly wa = SITE.whatsapp;
}
