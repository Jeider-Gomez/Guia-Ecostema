
import React from 'react';
import { InfoIcon } from './icons/Icons';

const CreditsSection: React.FC = () => {
  return (
    <footer id="creditos" className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-4 mb-4">
            <InfoIcon className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Créditos y Referencias</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4 border-b border-gray-600 pb-2">Créditos del Grupo</h3>
            <ul className="space-y-2">
              <li>Jorge Iván Cervantes García</li>
              <li>José Esteban López Hoyos</li>
              <li>Jeider Jair Gómez Oviedo</li>
            </ul>
            <h4 className="font-semibold text-white mt-4">Docente:</h4>
            <p>Óscar Luis Sibaja Cuello</p>
            <h4 className="font-semibold text-white mt-4">Curso:</h4>
            <p>Ambientes Educativos Tecnológicos</p>
            <p className="mt-4 text-sm text-gray-400">Universidad de Córdoba – Licenciatura en Informática (2025)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-emerald-400 mb-4 border-b border-gray-600 pb-2">Referencias (APA 7)</h3>
            <ul className="space-y-2 text-sm">
              <li>Ausubel, D. (1963). <em className="italic">The Psychology of Meaningful Learning.</em></li>
              <li>Johnson, D. & Johnson, R. (1999). <em className="italic">Learning Together and Alone.</em></li>
              <li>Bergmann, J. & Sams, A. (2012). <em className="italic">Flip Your Classroom.</em></li>
              <li>Luna Rizo, M. et al. (2021). <em className="italic">El diseño instruccional: Modelos y enfoques.</em></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} EcoGuía Interactiva. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default CreditsSection;
