
import React from 'react';
import Section from './Section';
import { UsersIcon } from './icons/Icons';

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
          Ahora trabajarán en equipos para construir un mural sobre los ecosistemas. Usen la siguiente herramienta para compartir ideas y crear algo increíble juntos.
        </p>
        
        <div className="flex justify-center mb-10">
          <a href="https://padlet.com/jgomezoviedo15/nuestro-mural-de-ecosistemas-wcdzc08bm7bqfoq8" target="_blank" rel="noopener noreferrer" className="block p-8 bg-amber-100 text-amber-800 rounded-lg hover:bg-amber-200 transition-all duration-300 shadow-md hover:shadow-xl w-full md:w-1/2 text-center">
            <h3 className="text-2xl font-bold mb-2">🧠 Padlet</h3>
            <p>Usa nuestro mural colaborativo para una lluvia de ideas rápida y compartir recursos.</p>
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
              <span className="text-gray-700 text-lg">Abre el enlace a Padlet para empezar a colaborar.</span>
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