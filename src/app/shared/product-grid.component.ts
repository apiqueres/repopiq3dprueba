import { Component, input } from '@angular/core';
import { Product } from '../site';
import { RevealDirective } from './reveal.directive';

@Component({
  selector: 'app-product-grid',
  imports: [RevealDirective],
  template: `
    <div class="grid">
      @for (p of products(); track p.img; let i = $index) {
        <article class="card" appReveal [revealDelay]="(i % 2) * 90">
          <div class="pic">
            <img [src]="p.img" [alt]="p.name" loading="lazy" />
          </div>
          <h3 class="headline-md name">{{ p.name }}</h3>
          <p class="tag">{{ p.tag }}</p>
        </article>
      }
    </div>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
    }
    @media (min-width: 640px) { .grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
    @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

    /* la imagen se muestra completa, sin recortes */
    .pic {
      aspect-ratio: 4 / 5;
      border-radius: var(--r-lg);
      background: var(--surface-container-lowest);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 14px;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform .6s var(--ease-out);
      }
    }

    .card:hover .pic img { transform: scale(1.04); }

    .name { margin-top: 16px; text-transform: uppercase; font-size: 18px; letter-spacing: -.01em; }
    .tag {
      margin-top: 4px;
      color: var(--accent);
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: .06em;
      text-transform: uppercase;
    }
  `,
})
export class ProductGridComponent {
  readonly products = input.required<Product[]>();
}
