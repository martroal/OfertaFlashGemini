
import type { Product } from './types';

export const WHATSAPP_NUMBER = "5491100000000"; // Placeholder number
export const EMAIL = "contacto@ofertaflash.com";
export const INSTAGRAM_URL = "https://instagram.com";
export const FACEBOOK_URL = "https://facebook.com";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Kit Facial "Glow Up"',
    description: 'La combinación perfecta de nuestro serum de Vitamina C y crema hidratante con ácido hialurónico para una piel radiante.',
    image: 'https://picsum.photos/seed/glowupkit/500/500',
    oldPrice: 7000,
    newPrice: 4990,
  },
  {
    id: 2,
    name: 'Kit Capilar "Reparación Total"',
    description: 'Devuélvele la vida a tu cabello con este dúo de shampoo sin sulfatos y mascarilla de keratina.',
    image: 'https://picsum.photos/seed/hairkit/500/500',
    oldPrice: 6500,
    newPrice: 4550,
  },
   {
    id: 3,
    name: 'Kit Corporal "Piel de Seda"',
    description: 'Exfoliante suave y loción corporal ultra-nutritiva para una piel suave, tersa y luminosa todo el día.',
    image: 'https://picsum.photos/seed/bodykit/500/500',
    oldPrice: 8200,
    newPrice: 5990,
  },
  {
    id: 4,
    name: 'Kit "Detox Nocturno"',
    description: 'Mascarilla de arcilla purificante y aceite facial de noche para regenerar tu piel mientras duermes.',
    image: 'https://picsum.photos/seed/detoxkit/500/500',
    oldPrice: 7500,
    newPrice: 5250,
  }
];
