import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/**
 * Aparece con un fade + slide sutil cuando el elemento entra en pantalla.
 * `revealFrom` controla la dirección de entrada: 'up' (por defecto), 'left' o 'right'.
 * Uso: <div appReveal [revealDelay]="120" revealFrom="left">…</div>
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  readonly revealDelay = input(0, { transform: numberAttribute });
  readonly revealFrom = input<'up' | 'left' | 'right'>('up');

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.revealFrom() !== 'up') node.classList.add(`from-${this.revealFrom()}`);
    node.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            this.observer?.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
