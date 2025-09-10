
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const ProductSection: React.FC = () => {
  return (
    <section id="nuestros-kits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-brand-dark mb-12">
          Nuestros Kits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
