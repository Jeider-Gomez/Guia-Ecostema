import React, { useState } from 'react';
import Section from './Section';
import { BookOpenIcon, PlayIcon, XIcon } from './icons/Icons';

const ContentSection: React.FC = () => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <Section 
        id="contenidos" 
        title="Aprendamos sobre los Ecosistemas" 
        icon={<BookOpenIcon className="w-10 h-10" />}
      >
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img 
              src="https://picsum.photos/seed/nature/600/400" 
              alt="Ecosistema terrestre" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-emerald-700">¿Qué es un Ecosistema?</h3>
              <p className="text-gray-600 leading-relaxed">
                Un ecosistema es un sistema biológico constituido por una comunidad de organismos vivos (biocenosis) y el medio físico donde se relacionan (biotopo). Es un conjunto de especies en un área determinada que interactúan entre ellas y con su ambiente abiótico.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <img 
                src="https://picsum.photos/seed/water/600/400" 
                alt="Ecosistema acuático" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
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
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Mira este video para tener una idea más clara sobre qué son los ecosistemas y su importancia.
            </p>
            <div 
              className="relative w-full max-w-4xl mx-auto rounded-lg shadow-2xl cursor-pointer group overflow-hidden"
              onClick={() => setVideoModalOpen(true)}
            >
              <img src="https://i.ytimg.com/vi/tPFGdTE_nas/maxresdefault.jpg" alt="Vista previa del video sobre ecosistemas" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <PlayIcon className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="bg-black p-2 rounded-lg shadow-2xl relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setVideoModalOpen(false)} 
              className="absolute -top-3 -right-3 bg-white rounded-full p-1 text-gray-800 hover:bg-gray-200 transition z-10"
              aria-label="Cerrar video"
            >
              <XIcon className="w-6 h-6" />
            </button>
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tPFGdTE_nas?si=O5kMm3mO5RWrSpIU&autoplay=1" 
                title="YouTube video player"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentSection;