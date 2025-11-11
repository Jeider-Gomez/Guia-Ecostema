
import React from 'react';
import Section from './Section';
import { ThoughtBubbleIcon, ExternalLinkIcon } from './icons/Icons';

const ReflectionSection: React.FC = () => {
  return (
    <Section
      id="actividades"
      title="Piensa y Comparte"
      subtitle="Es momento de reflexionar sobre lo que hemos aprendido y conectar con tu entorno."
      icon={<ThoughtBubbleIcon className="w-10 h-10" />}
      className="bg-[#F8F7F1]"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">1. ¿Qué ecosistemas conoces cerca de tu comunidad?</h3>
          <p className="text-gray-600">Piensa en los parques, ríos, o zonas verdes que has visitado. Descríbelos brevemente.</p>
        </div>
        <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">2. ¿Por qué son importantes los ecosistemas para los seres vivos?</h3>
          <p className="text-gray-600">Considera el aire, el agua, los alimentos y el refugio que nos proporcionan.</p>
        </div>
        <div className="text-center mt-12">
          <a
            href="https://padlet.com/jgomezoviedo15/piensa-y-comparte-5y6sf9t37ht053vf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            <ExternalLinkIcon className="w-6 h-6" />
            Comparte tus respuestas en el Mural de Padlet
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ReflectionSection;