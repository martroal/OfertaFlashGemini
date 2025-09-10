
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/beautyhero/1920/1080')" }}
      ></div>
      <div className="relative z-20 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-md">
          Calidad Premium, Resultados Reales.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Descubre nuestros kits exclusivos de cuidado personal y transforma tu rutina. Ofertas por tiempo limitado.
        </p>
        <a
          href="#nuestros-kits"
          className="mt-8 inline-block bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-accent transition-all duration-300 shadow-lg"
        >
          Ver los Kits
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
