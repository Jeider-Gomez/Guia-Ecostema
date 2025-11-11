
import React from 'react';
import Section from './Section';
import { BookOpenIcon, PlayIcon } from './icons/Icons';

const ContentSection: React.FC = () => {
  return (
    <Section 
      id="contenidos" 
      title="Aprendamos sobre los Ecosistemas" 
      icon={<BookOpenIcon className="w-10 h-10" />}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="https://picsum.photos/seed/nature/600/400" alt="Ecosistema terrestre" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-emerald-700">¿Qué es un Ecosistema?</h3>
            <p className="text-gray-600 leading-relaxed">
              Un ecosistema es un sistema biológico constituido por una comunidad de organismos vivos (biocenosis) y el medio físico donde se relacionan (biotopo). Es un conjunto de especies en un área determinada que interactúan entre ellas y con su ambiente abiótico.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <img src="https://picsum.photos/seed/water/600/400" alt="Ecosistema acuático" className="rounded-lg shadow-lg w-full h-auto object-cover"/>
          </div>
          <div className="md:order-1">
            <h3 className="text-2xl font-bold mb-3 text-emerald-700">Tipos de Ecosistemas</h3>
            <p className="text-gray-600 leading-relaxed">
              Los ecosistemas se dividen principalmente en terrestres (bosques, desiertos), acuáticos (océanos, ríos, lagos) y mixtos (costas, humedales). Cada uno tiene características únicas y alberga diferentes formas de vida adaptadas a sus condiciones específicas.
            </p>
          </div>
        </div>

        <div className="text-center pt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Video Introductorio</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Mira este video para tener una idea más clara sobre qué son los ecosistemas y su importancia.</p>
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto">
                <iframe 
                    src="https://www.youtube.com/embed/CA25_28Lmm4" 
                    title="Video educativo sobre ecosistemas" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default ContentSection;
