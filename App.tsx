
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ObjectivesSection from './components/ObjectivesSection';
import ContentSection from './components/ContentSection';
import ReflectionSection from './components/ReflectionSection';
import CollaborationSection from './components/CollaborationSection';
import AssessmentSection from './components/AssessmentSection';
import ResourcesSection from './components/ResourcesSection';
import SelfAssessmentSection from './components/SelfAssessmentSection';
import CreditsSection from './components/CreditsSection';

const App: React.FC = () => {
  return (
    <div className="bg-[#F8F7F1] text-gray-800 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ObjectivesSection />
        <ContentSection />
        <ReflectionSection />
        <CollaborationSection />
        <AssessmentSection />
        <ResourcesSection />
        <SelfAssessmentSection />
      </main>
      <CreditsSection />
    </div>
  );
};

export default App;
