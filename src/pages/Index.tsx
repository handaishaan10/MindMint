
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import { KitShowcase } from '@/components/KitShowcase';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'products':
        return <ProductGrid />;
      case 'kits':
        return <KitShowcase />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <Hero />
            <KitShowcase />
            <ProductGrid />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
