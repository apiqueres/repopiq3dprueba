import { Component, input } from '@angular/core';
import { Product } from '../site';
import { RevealDirective } from './reveal.directive';
import { ParallaxDirective } from './parallax.directive';

@Component({
  selector: 'app-product-grid',
  imports: [RevealDirective, ParallaxDirective],
  template: `
    <div class="grid">
      @for (p of products(); track p.img; let i = $index) {
        <article class="card" appReveal [revealDelay]="(i % 2) * 90">
          <div class="img-frame">
            @if (p.badge) {
              <span class="badge badge-dark floating">{{ p.badge }}</span>
            }
            <img [src]="p.img" [alt]="p.name" loading="lazy" appParallax [speed]="0.10" />
          </div>
          <h3 class="headline-md name">{{ p.name }}</h3>
          <p class="tag">{{ p.tag }}</p>
          @if (p.desc) {
            <p class="body-md muted desc">{{ p.desc }}</p>
          }
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

    .card .img-frame {
      aspect-ratio: 4 / 5;
      background: var(--surface-container-low);
    }
    .floating {
      position: absolute;
      top: 14px;
      left: 14px;
      z-index: 2;
    }
    .name { margin-top: 16px; text-transform: uppercase; font-size: 18px; letter-spacing: -.01em; }
    .tag {
      margin-top: 4px;
      color: var(--accent);
      font-size: 12.5px;
      font-weight: 700;
      letter-spacing: .06em;
      text-transform: uppercase;
    }
    .desc { margin-top: 6px; font-size: 14px; }
  `,
})
export class ProductGridComponent {
  readonly products = input.required<Product[]>();
}
