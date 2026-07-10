import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="logo-chip">
          <img src="assets/img/logo/logo_piq3d.png" alt="Logotipo PIQ3D" loading="lazy" />
        </div>
        <p class="logo">PIQ3D</p>
        <p class="body-md tagline">
          La nueva era de la fabricación personalizada. Diseñamos y producimos
          objetos únicos con tecnología 3D de precisión.
        </p>

        <div class="cols">
          <div>
            <p class="label col-title">Categorías</p>
            <ul>
              <li><a routerLink="/trofeos">Trofeos</a></li>
              <li><a routerLink="/medallas">Medallas</a></li>
              <li><a routerLink="/merchandising">Llaveros</a></li>
              <li><a [href]="site.whatsapp" target="_blank" rel="noopener">QRs</a></li>
            </ul>
          </div>
          <div>
            <p class="label col-title">Contacto</p>
            <ul>
              <li><a [href]="site.whatsapp" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a [href]="site.email">Email</a></li>
              <li><a [href]="site.instagram" target="_blank" rel="noopener">Instagram</a></li>
              <li>{{ site.ubicacion }}</li>
            </ul>
          </div>
        </div>

        <div class="news">
          <p class="label col-title">Newsletter</p>
          <p class="body-md hint">Recibe noticias sobre nuevos materiales y proyectos.</p>
          <form class="news-form" (submit)="$event.preventDefault()">
            <input type="email" placeholder="Tu email" aria-label="Tu email" />
            <button class="btn btn-accent send" type="submit" aria-label="Suscribirme">→</button>
          </form>
        </div>

        <div class="legal">
          <p>© {{ year }} PIQ3D. Fabricado con precisión en Valencia.</p>
          <div class="links">
            <a href="#">Privacidad</a><a href="#">Aviso legal</a><a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background: #0a0a0a;
      color: #f0f1f1;
      padding-block: 64px 40px;
      margin-top: 0;
    }
    .logo-chip {
      width: 150px;
      height: 52px;
      border-radius: var(--r-md);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f9f7dc;
      margin-bottom: 16px;

      img { width: 300px; max-width: none; }
    }
    .logo { font-size: 24px; font-weight: 800; letter-spacing: -.02em; }
    .tagline { color: #b9bcbc; margin-top: 14px; max-width: 42ch; }
    .cols {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      margin-top: 36px;
    }
    .col-title { color: var(--accent); margin-bottom: 14px; }
    ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
    ul a { color: #d7dada; transition: color .3s; }
    ul a:hover { color: #fff; }
    .news { margin-top: 36px; }
    .hint { color: #9a9d9d; font-size: 13px; margin-block: 6px 12px; }
    .news-form { display: flex; gap: 10px; max-width: 380px; }
    .news-form input {
      flex: 1;
      min-width: 0;
      background: rgba(255, 255, 255, .07);
      border: 1px solid rgba(255, 255, 255, .14);
      border-radius: var(--r-full);
      color: #fff;
      padding: 12px 18px;
      font-family: var(--font);
      font-size: 14px;
      outline: none;
      transition: border-color .3s;
      &:focus { border-color: var(--accent); }
      &::placeholder { color: #8b8e8e; }
    }
    .send { min-height: 46px; padding: 10px 20px; font-size: 16px; }
    .legal {
      margin-top: 44px;
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, .12);
      font-size: 12.5px;
      color: #9a9d9d;
      display: flex;
      flex-wrap: wrap;
      gap: 12px 24px;
      justify-content: space-between;
    }
    .links { display: flex; gap: 18px; }
    .links a:hover { color: #fff; }
  `,
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
