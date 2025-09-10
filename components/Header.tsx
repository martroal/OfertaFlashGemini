
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-brand-primary/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-brand-dark">
          Oferta Flash
        </a>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#nuestros-kits" className="text-text-primary hover:text-brand-dark transition-colors duration-300 font-medium">
                Nuestros Kits
              </a>
            </li>
            <li>
              <a href="#contacto" className="text-text-primary hover:text-brand-dark transition-colors duration-300 font-medium">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
