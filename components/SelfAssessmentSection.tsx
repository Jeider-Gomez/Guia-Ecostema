
import React from 'react';
import Section from './Section';
import { CheckCircleIcon } from './icons/Icons';

const SelfAssessmentSection: React.FC = () => {
  return (
    <Section 
      id="autoevaluacion" 
      title="Reflexionemos sobre nuestro Aprendizaje"
      icon={<CheckCircleIcon className="w-10 h-10" />}
    >
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="text-center text-gray-600 mb-8">Piensa en lo que has aprendido y cómo te has sentido durante esta guía.</p>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">¿Qué fue lo que más te gustó de esta guía?</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" rows={3}></textarea>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">¿Cómo puedes cuidar el ecosistema en tu entorno?</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition" rows={3}></textarea>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-4">Evalúa tu aprendizaje:</label>
            <div className="flex justify-around">
              <label className="flex flex-col items-center space-y-2 cursor-pointer">
                <input type="radio" name="learning" className="sr-only peer"/>
                <span className="text-5xl peer-checked:grayscale-0 grayscale transition-transform peer-checked:scale-110">✅</span>
                <span className="font-semibold text-gray-700 peer-checked:text-emerald-600">Lo logré</span>
              </label>
              <label className="flex flex-col items-center space-y-2 cursor-pointer">
                <input type="radio" name="learning" className="sr-only peer"/>
                <span className="text-5xl peer-checked:grayscale-0 grayscale transition-transform peer-checked:scale-110">🔄</span>
                <span className="font-semibold text-gray-700 peer-checked:text-emerald-600">Aún debo mejorar</span>
              </label>
            </div>
          </div>
          <div className="text-center pt-4">
            <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg">
              Enviar Reflexión
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default SelfAssessmentSection;
