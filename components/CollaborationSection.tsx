
import React from 'react';
import Section from './Section';
import { UsersIcon, ExternalLinkIcon } from './icons/Icons';

const CollaborationSection: React.FC = () => {
  return (
    <Section 
      id="colaboracion" 
      title="Aprendamos Juntos" 
      subtitle="El conocimiento se construye mejor en equipo. ¡Es hora de colaborar!"
      icon={<UsersIcon className="w-10 h-10"/>}
    >
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <p className="text-center text-gray-600 mb-8 text-lg">
          Ahora trabajarán en equipos para construir mapas conceptuales y murales sobre los ecosistemas. Usen las siguientes herramientas para compartir ideas y crear algo increíble juntos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 text-center mb-10">
          <a href="https://padlet.com/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-colors duration-300 shadow-md">
            <h3 className="text-2xl font-bold mb-2">🧠 Padlet</h3>
            <p>Ideal para una lluvia de ideas rápida y compartir recursos.</p>
          </a>
          <a href="https://jamboard.google.com/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition-colors duration-300 shadow-md">
            <h3 className="text-2xl font-bold mb-2">🗺️ Jamboard</h3>
            <p>Perfecto para crear mapas conceptuales y diagramas visuales.</p>
          </a>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Pasos a seguir:</h3>
          <ol className="space-y-4 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 mr-4 bg-emerald-500 text-white rounded-full font-bold">1</span>
              <span className="text-gray-700 text-lg">Observa nuevamente el video y la infografía de la sección de contenidos.</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 mr-4 bg-emerald-500 text-white rounded-full font-bold">2</span>
              <span className="text-gray-700 text-lg">Abre el enlace a la herramienta colaborativa que tu profesor asigne.</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 mr-4 bg-emerald-500 text-white rounded-full font-bold">3</span>
              <span className="text-gray-700 text-lg">Agrega tu aporte: puede ser texto, una imagen, un dibujo o un enlace.</span>
            </li>
            <li className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 mr-4 bg-emerald-500 text-white rounded-full font-bold">4</span>
              <span className="text-gray-700 text-lg">Lee y comenta de forma respetuosa las ideas de tus compañeros.</span>
            </li>
          </ol>
        </div>
      </div>
    </Section>
  );
};

export default CollaborationSection;
