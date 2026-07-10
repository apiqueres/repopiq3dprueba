/**
 * Datos de contacto y catálogo del sitio.
 * TODO(Alejandro): revisa el número de WhatsApp y el usuario de Instagram.
 */
export const SITE = {
  whatsapp: 'https://wa.me/34600000000?text=Hola%20PIQ3D%2C%20quiero%20pedir%20presupuesto',
  email: 'mailto:alevaljau01@gmail.com?subject=Presupuesto%20PIQ3D',
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
  { img: 'assets/img/trofeos/06_challenge_luisvives.png', name: 'Challenge Luis Vives', tag: 'Circuito escolar', desc: 'Identidad del evento integrada en la pieza.' },
  { img: 'assets/img/trofeos/04_paelles_llauri.png', name: 'Concurs de Paelles · Llaurí', tag: 'Evento popular', desc: 'Diseño temático con guiño local.' },
  { img: 'assets/img/trofeos/05_ch_sueca_mareny.png', name: 'CH Sueca · Mareny', tag: 'Balonmano', desc: 'Trofeo de club con logotipo en relieve.' },
  { img: 'assets/img/trofeos/10_sueca_arros_sds.png', name: 'Sueca Arròs SDS', tag: 'Pieza única', desc: 'Trofeo temático del arroz de Sueca.' },
  { img: 'assets/img/trofeos/03_pbrb_50anys.png', name: 'PBRB · 50 anys', tag: 'Aniversario', desc: 'Conmemoración de los 50 años del club.' },
];

export const MEDALLAS: Product[] = [
  { img: 'assets/img/medallas/01_ch_sueca_handbol.png', name: 'CH Sueca Handbol', tag: 'Pedidos por volumen', badge: 'Club', desc: 'Medalla de club con cinta personalizada.' },
  { img: 'assets/img/medallas/valencia_xiques_anverso.jpg', name: 'València Xiques · Anverso', tag: 'Serie deportiva', badge: 'Edición limitada', desc: 'Anverso con identidad del torneo.' },
  { img: 'assets/img/medallas/valencia_xiques_reverso.jpg', name: 'València Xiques · Reverso', tag: 'Serie deportiva', desc: 'Reverso grabado con detalle fino.' },
  { img: 'assets/img/medallas/medallasinfondo.png', name: 'Colección PIQ3D', tag: 'Multicolor', badge: 'Colección', desc: 'Variedad cromática para cada categoría.' },
  { img: 'assets/img/medallas/medallas_partetrasera.png', name: 'Acabado posterior', tag: 'Detalle', desc: 'Cuidamos también la cara que no se ve.' },
  { img: 'assets/img/medallas/whatsapp_image_2026-06-15_at_10.12.55.jpeg', name: 'Entrega de evento', tag: 'Evento real', desc: 'Medallas listas el día de la prueba.' },
];

export const MERCH: Product[] = [
  { img: 'assets/img/merch/01_llaveros_club.png', name: 'Llaveros de club', tag: 'Corporativo', badge: 'Volumen', desc: 'Merchandising de impacto para tu afición.' },
  { img: 'assets/img/merch/03_llaveros.png', name: 'Llaveros personalizados', tag: 'Detalle premium', desc: 'Con tu logo, en cualquier color.' },
  { img: 'assets/img/merch/02_figuritas.png', name: 'Figuritas', tag: 'Hecho a medida', badge: 'Top ventas', desc: 'Personajes y mascotas en miniatura.' },
  { img: 'assets/img/merch/05_pin_falla.png', name: 'Pin de falla', tag: 'Tradición', desc: 'Detalle fallero con acabado brillante.' },
  { img: 'assets/img/merch/06_imanes.png', name: 'Imanes', tag: 'Regalo de evento', desc: 'Recuerdos que se quedan en la nevera.' },
  { img: 'assets/img/merch/imanes_regalo.png', name: 'Imanes regalo', tag: 'Packs', desc: 'Packs listos para regalar.' },
  { img: 'assets/img/merch/xaranga.png', name: 'Xaranga', tag: 'Pieza única', desc: 'Diseño festivo para agrupaciones.' },
  { img: 'assets/img/merch/sujetapauelos1.jpeg', name: 'Sujetapañuelos', tag: 'Fiestas', desc: 'Accesorio tradicional reinventado en 3D.' },
];
