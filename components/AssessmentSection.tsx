
import React from 'react';
import Section from './Section';
import { GamepadIcon } from './icons/Icons';

const AssessmentSection: React.FC = () => {
  return (
    <Section
      id="evaluacion"
      title="Pon a Prueba lo que Aprendiste"
      icon={<GamepadIcon className="w-10 h-10" />}
      className="bg-emerald-700 text-white"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-xl mb-8 leading-relaxed">
          ¡Es hora de jugar! Responde este divertido juego de Kahoot para comprobar cuánto has aprendido sobre los ecosistemas. ¡Buena suerte!
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-8 max-w-md mx-auto">
          <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: '100%' }}></div>
        </div>
        <a
          href="https://create.kahoot.it/share/explorando-los-ecosistemas/356cc05a-f745-471e-9b74-7f4357dd86b6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-gray-200 text-emerald-700 font-bold py-4 px-10 rounded-full text-xl transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Iniciar Kahoot
        </a>
      </div>
    </Section>
  );
};

export default AssessmentSection;