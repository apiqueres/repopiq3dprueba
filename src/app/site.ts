/** Datos de contacto y catálogo del sitio. */
export const SITE = {
  whatsapp: 'https://wa.me/34623754444?text=Hola%20PIQ3D%2C%20quiero%20pedir%20presupuesto',
  email: 'mailto:contacto@piq3d.com?subject=Presupuesto%20PIQ3D',
  instagram: 'https://www.instagram.com/piq3d',
  ubicacion: 'Valencia, España',
};

export interface Product {
  img: string;
  name: string;
  tag: string;
  badge?: string;
  desc?: string;
}

export const TROFEOS: Product[] = [
  { img: 'assets/img/trofeos/09_fibravalencia_alaquas.png', name: 'Fibra València · Alaquàs', tag: 'Pieza única', badge: 'Finalizado', desc: 'Geometría inspirada en la fibra, acabado mate premium.' },
  { img: 'assets/img/trofeos/07_trofeu_puchades.png', name: 'Trofeu Puchades', tag: 'Edición conmemorativa', badge: 'Entregado', desc: 'Homenaje deportivo con relieve de alta definición.' },
  { img: 'assets/img/trofeos/08_valencia_xiques_3x3.png', name: 'València Xiques 3x3', tag: 'Serie deportiva', badge: 'Colección', desc: 'Serie completa para torneo de baloncesto 3x3.' },
  { img: 'assets/img/trofeos/02_torneig_f8.png', name: 'Torneig F8', tag: 'Fútbol base', desc: 'Trofeo de campeones para fútbol 8.' },
  { img: 'assets/img/trofeos/05_ch_sueca_mareny.png', name: 'CH Sueca · Mareny', tag: 'Balonmano', desc: 'Trofeo de club con logotipo en relieve.' },
  { img: 'assets/img/trofeos/10_sueca_arros_sds.png', name: 'Sueca Arròs SDS', tag: 'Pieza única', desc: 'Trofeo temático del arroz de Sueca.' },
  { img: 'assets/img/trofeos/fallasucro.png', name: 'Falla Sucro', tag: 'Tradición', desc: 'Diseño fallero impreso en PLA con detalle fino.' },
  { img: 'assets/img/trofeos/03_pbrb_50anys.png', name: 'PBRB · 50 anys', tag: 'Aniversario', desc: 'Conmemoración de los 50 años del club.' },
];

export const MEDALLAS: Product[] = [
  { img: 'assets/img/medallas/medallasenselimits.png', name: '10K Sense Límits', tag: 'Carrera popular', badge: 'Edición 2026', desc: 'Medalla en PLA multicolor con cinta personalizada.' },
  { img: 'assets/img/medallas/01_ch_sueca_handbol.png', name: 'CH Sueca Handbol', tag: 'Pedidos por volumen', badge: 'Club', desc: 'Medalla de club con cinta personalizada.' },
  { img: 'assets/img/medallas/valencia_xiques_reverso.jpg', name: 'València Xiques · Reverso', tag: 'Serie deportiva', desc: 'Reverso grabado con detalle fino.' },
  { img: 'assets/img/medallas/medallasinfondo.png', name: 'Colección PIQ3D', tag: 'Multicolor', badge: 'Colección', desc: 'Variedad cromática para cada categoría.' },
  { img: 'assets/img/medallas/medallas_partetrasera.png', name: 'Acabado posterior', tag: 'Detalle', desc: 'Cuidamos también la cara que no se ve.' },
];

export const MERCH: Product[] = [
  { img: 'assets/img/merch/01_llaveros_club.png', name: 'Llaveros de club', tag: 'Corporativo', badge: 'Volumen', desc: 'Merchandising de impacto para tu afición.' },
  { img: 'assets/img/merch/03_llaveros.png', name: 'Llaveros personalizados', tag: 'Detalle premium', desc: 'Con tu logo, en cualquier color.' },
  { img: 'assets/img/merch/02_figuritas.png', name: 'Figuritas', tag: 'Hecho a medida', badge: 'Top ventas', desc: 'Personajes y mascotas en miniatura.' },
  { img: 'assets/img/merch/05_pin_falla.png', name: 'Pin de falla', tag: 'Tradición', desc: 'Detalle fallero con acabado brillante.' },
  { img: 'assets/img/merch/06_imanes.png', name: 'Imanes', tag: 'Regalo de evento', desc: 'Recuerdos que se quedan en la nevera.' },
  { img: 'assets/img/merch/imanes_regalo.png', name: 'Imanes regalo', tag: 'Packs', desc: 'Packs listos para regalar.' },
];

export const QRS: Product[] = [
  { img: 'assets/img/qr/sushiroom_delantero.png', name: 'The Sushi Room', tag: 'QR + NFC integrado' },
  { img: 'assets/img/qr/caquitin.png', name: 'Ca Quintín', tag: 'Soporte bicolor' },
  { img: 'assets/img/qr/sushiroom_de_lado.png', name: 'Vista de perfil', tag: 'Diseño esbelto' },
];
