import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PublicationsSection from './components/PublicationsSection.tsx';
import TalkSection from './components/TalkSection.tsx';
import TeachingSection from './components/TeachingSection';
import CVSection from './components/CVSection.tsx';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#f0f4ff] text-gray-800 overflow-x-hidden">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Header />
        <HeroSection />
      </main>
      <AboutSection />
      <PublicationsSection />
      <TalkSection />
      <TeachingSection />
      <CVSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
