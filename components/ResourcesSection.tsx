
import React from 'react';
import Section from './Section';
import { ExternalLinkIcon, ImageIcon, FileTextIcon, Volume2Icon } from './icons/Icons';

const resources = [
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: 'Infografía de Ecosistemas',
    description: 'Un resumen visual de los tipos de ecosistemas y sus características.',
    link: 'https://infografia-ecosistema.vercel.app/',
  },
  {
    icon: <FileTextIcon className="w-8 h-8" />,
    title: 'Curiosidades de la Biodiversidad',
    description: 'Un artículo breve con datos fascinantes sobre la vida en nuestro planeta.',
    link: '#',
  },
  {
    icon: <Volume2Icon className="w-8 h-8" />,
    title: 'Sonidos de la Naturaleza',
    description: 'Relájate y escucha los sonidos de un bosque lluvioso.',
    link: '#',
  }
];

const ResourcesSection: React.FC = () => {
  return (
    <Section
      id="recursos"
      title="Recursos Complementarios"
      subtitle="Explora estos materiales adicionales para ampliar tus conocimientos."
      icon={<ExternalLinkIcon className="w-10 h-10" />}
      className="bg-[#F8F7F1]"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="text-emerald-500 mb-4">{resource.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
            <p className="text-gray-600 flex-grow mb-4">{resource.description}</p>
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 bg-gray-200 hover:bg-emerald-500 hover:text-white text-gray-700 font-semibold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Abrir recurso
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ResourcesSection;
