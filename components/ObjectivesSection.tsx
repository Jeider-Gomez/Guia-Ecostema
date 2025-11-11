
import React from 'react';
import Section from './Section';
import { TargetIcon, LightbulbIcon, LeafIcon, CheckCircleIcon } from './icons/Icons';

const objectives = [
  {
    icon: <TargetIcon className="w-10 h-10"/>,
    text: 'Identificar los componentes bióticos y abióticos de un ecosistema.',
  },
  {
    icon: <LightbulbIcon className="w-10 h-10"/>,
    text: 'Comprender las relaciones alimentarias y los flujos de energía en diferentes ecosistemas.',
  },
  {
    icon: <LeafIcon className="w-10 h-10"/>,
    text: 'Valorar la importancia de la biodiversidad y la conservación de los ecosistemas.',
  },
  {
    icon: <CheckCircleIcon className="w-10 h-10"/>,
    text: 'Colaborar en equipo para construir conocimiento de forma colectiva y creativa.',
  }
];

const ObjectivesSection: React.FC = () => {
  return (
    <Section
      id="objetivos"
      title="Objetivos de Aprendizaje"
      subtitle="Descubre lo que lograrás al finalizar esta guía interactiva."
      icon={<TargetIcon className="w-10 h-10" />}
      className="bg-[#F8F7F1]"
    >
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {objectives.map((obj, index) => (
          <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex-shrink-0 text-emerald-500">{obj.icon}</div>
            <p className="text-gray-700 text-lg">{obj.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ObjectivesSection;
