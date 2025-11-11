
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white text-center px-6">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://picsum.photos/seed/ecosystem/1920/1080" alt="Un exuberante ecosistema de bosque con un río" className="absolute inset-0 w-full h-full object-cover"/>
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Explorando los Ecosistemas
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Aprendizaje significativo, colaborativo e inclusivo con Mobile Learning
        </p>
        <a 
          href="#objetivos" 
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Comenzar
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
