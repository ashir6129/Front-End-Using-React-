import React from 'react';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Testimonials/>
        <Pricing/>
        <Workflow/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
