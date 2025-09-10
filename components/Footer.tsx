
import React from 'react';
import { EMAIL, INSTAGRAM_URL, FACEBOOK_URL } from '../constants';
import InstagramIcon from './icons/InstagramIcon';
import FacebookIcon from './icons/FacebookIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-brand-primary/20 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-brand-dark">¿Tienes Dudas? Contáctanos</h2>
        <div className="mt-8 space-y-4 text-lg text-text-primary">
          <p>
            <a href={`mailto:${EMAIL}`} className="hover:text-brand-dark transition-colors">{EMAIL}</a>
          </p>
          <p>
            WhatsApp: +54 9 11 XXXX-XXXX
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:opacity-70 transition-opacity">
            <InstagramIcon className="h-8 w-8" />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:opacity-70 transition-opacity">
            <FacebookIcon className="h-8 w-8" />
          </a>
        </div>
         <div className="mt-12 border-t border-brand-accent/30 pt-6 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Oferta Flash. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
