import { Component, HostListener, computed, effect, signal } from '@angular/core';
import { FEATURES, GALERIA, GaleriaItem } from '../site';
import { RevealDirective } from '../shared/reveal.directive';

const LABELS: Record<string, string> = {
  todos: 'Todos',
  trofeos: 'Trofeos',
  medallas: 'Medallas',
  merchandising: 'Merchandising',
  ...(FEATURES.qrs ? { qrs: 'QRs' } : {}),
};

// Mientras los QRs estén ocultos, no se muestran sus imágenes en la galería
const ITEMS: GaleriaItem[] = FEATURES.qrs ? GALERIA : GALERIA.filter(i => i.cat !== 'qrs');

@Component({
  selector: 'app-galeria',
  imports: [RevealDirective],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  readonly filters = Object.keys(LABELS);
  readonly labels = LABELS;

  readonly filter = signal('todos');
  readonly items = computed<GaleriaItem[]>(() =>
    this.filter() === 'todos' ? ITEMS : ITEMS.filter(i => i.cat === this.filter()),
  );

  /** índice del elemento abierto en el visor, o null si está cerrado */
  readonly selected = signal<number | null>(null);
  readonly current = computed(() => {
    const i = this.selected();
    return i === null ? null : this.items()[i];
  });

  constructor() {
    // bloquea el scroll de fondo mientras el visor está abierto
    effect(() => {
      document.body.style.overflow = this.selected() === null ? '' : 'hidden';
    });
  }

  setFilter(f: string): void {
    this.filter.set(f);
    this.selected.set(null);
  }

  open(i: number): void {
    this.selected.set(i);
  }

  close(): void {
    this.selected.set(null);
  }

  prev(): void {
    const i = this.selected();
    if (i === null) return;
    this.selected.set((i - 1 + this.items().length) % this.items().length);
  }

  next(): void {
    const i = this.selected();
    if (i === null) return;
    this.selected.set((i + 1) % this.items().length);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (this.selected() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
