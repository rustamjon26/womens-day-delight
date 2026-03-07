import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import PersonalizedGreeting from './components/PersonalizedGreeting';
import ComplimentGenerator from './components/ComplimentGenerator';
import GiftBox from './components/GiftBox';
import QualitiesGrid from './components/QualitiesGrid';
import FinalSection from './components/FinalSection';
import MusicPlayer from './components/MusicPlayer';
import FlowerPetals from './components/FlowerPetals';

function App() {
  return (
    <main className="relative min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Background Petals Animation */}
      <FlowerPetals />
      
      {/* Navigation or Hero */}
      <Hero />
      
      {/* Main Content Sections */}
      <div className="space-y-24 md:space-y-48 relative z-10">
        <PersonalizedGreeting />
        
        <div id="compliments">
          <ComplimentGenerator />
        </div>
        
        <GiftBox />
        
        <QualitiesGrid />
      </div>
      
      {/* Final Celebration Footer */}
      <FinalSection />
      
      {/* Fixed Music Control */}
      <MusicPlayer />
    </main>
  );
}

export default App;
