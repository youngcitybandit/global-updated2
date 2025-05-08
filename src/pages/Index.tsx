
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import CoverageSection from '../components/CoverageSection';
import TestimonialSection from '../components/TestimonialSection';
import QuoteForm from '../components/QuoteForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <CoverageSection />
        <TestimonialSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
