import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { CategoriaComponent } from './pages/categoria.component';
import { GaleriaComponent } from './pages/galeria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'PIQ3D — Diseño que se toca' },
  { path: 'trofeos', component: CategoriaComponent, data: { slug: 'trofeos' }, title: 'Trofeos · PIQ3D' },
  { path: 'medallas', component: CategoriaComponent, data: { slug: 'medallas' }, title: 'Medallas · PIQ3D' },
  { path: 'merchandising', component: CategoriaComponent, data: { slug: 'merchandising' }, title: 'Merchandising · PIQ3D' },
  { path: 'qrs', component: CategoriaComponent, data: { slug: 'qrs' }, title: 'QRs personalizados · PIQ3D' },
  { path: 'galeria', component: GaleriaComponent, title: 'Galería · PIQ3D' },
  { path: '**', redirectTo: '' },
];
