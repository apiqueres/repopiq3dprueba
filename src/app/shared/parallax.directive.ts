import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject, input, numberAttribute } from '@angular/core';

/**
 * Desplaza la imagen suavemente mientras se hace scroll (efecto parallax).
 * Pensada para <img appParallax> dentro de un contenedor .img-frame con overflow hidden.
 * `speed` controla la intensidad (0.1 = sutil, 0.3 = marcado).
 */
@Directive({ selector: '[appParallax]' })
export class ParallaxDirective implements OnInit, OnDestroy {
  readonly speed = input(0.16, { transform: numberAttribute });

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private raf = 0;
  private ticking = false;
  private readonly onScroll = () => this.requestTick();
  private reduced = false;

  ngOnInit(): void {
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.reduced) return;

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      this.requestTick();
    });
  }

  private requestTick(): void {
    if (this.ticking) return;
    this.ticking = true;
    this.raf = requestAnimationFrame(() => {
      this.ticking = false;
      this.update();
    });
  }

  private update(): void {
    const node = this.el.nativeElement;
    const host = node.parentElement ?? node;
    const rect = host.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < -80 || rect.top > vh + 80) return;

    // -1 (arriba) … 1 (abajo) respecto al centro del viewport
    const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
    const shift = -progress * this.speed() * rect.height;
    node.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
  }

  ngOnDestroy(): void {
    if (this.reduced) return;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    cancelAnimationFrame(this.raf);
  }
}
