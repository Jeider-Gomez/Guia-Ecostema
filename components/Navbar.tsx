import React, { useState } from 'react';
import { MenuIcon, XIcon, HomeIcon, TargetIcon, BookOpenIcon, UsersIcon, ExternalLinkIcon, HelpCircleIcon, InfoIcon } from './icons/Icons';

interface NavLink {
  href: string;
  label: string;
  // Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
}

const navLinks: NavLink[] = [
  { href: '#inicio', label: 'Inicio', icon: <HomeIcon /> },
  { href: '#objetivos', label: 'Objetivos', icon: <TargetIcon /> },
  { href: '#contenidos', label: 'Contenidos', icon: <BookOpenIcon /> },
  { href: '#actividades', label: 'Actividades', icon: <UsersIcon /> },
  { href: '#recursos', label: 'Recursos', icon: <ExternalLinkIcon /> },
  { href: '#evaluacion', label: 'Evaluación', icon: <HelpCircleIcon /> },
  { href: '#creditos', label: 'Créditos', icon: <InfoIcon /> },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="font-bold text-xl text-emerald-700 hidden sm:block">EcoGuía</span>
        </a>

        <nav className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-gray-600 font-medium hover:bg-emerald-100 hover:text-emerald-700 rounded-md transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 font-medium hover:bg-emerald-100 hover:text-emerald-700 rounded-md transition-colors duration-300"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
