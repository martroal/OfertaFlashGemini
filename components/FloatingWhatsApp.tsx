
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';
import WhatsAppIcon from './icons/WhatsAppIcon';

const FloatingWhatsApp: React.FC = () => {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};

export default FloatingWhatsApp;
