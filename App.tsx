
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="bg-background font-sans text-text-primary">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
