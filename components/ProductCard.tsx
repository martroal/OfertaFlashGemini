
import React from 'react';
import type { Product } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const whatsappMessage = encodeURIComponent(`Hola, me interesa el ${product.name}`);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="bg-background border border-brand-primary/30 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-serif font-bold text-brand-dark">{product.name}</h3>
        <p className="mt-2 text-text-primary flex-grow">{product.description}</p>
        <div className="mt-4 flex items-center space-x-4">
          <span className="text-3xl font-bold text-brand-dark">{formatPrice(product.newPrice)}</span>
          <span className="text-xl text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full bg-brand-dark text-white text-center font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
        >
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
