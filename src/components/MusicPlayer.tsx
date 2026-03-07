import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Heart, Sparkles } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Autoplay blocked", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 w-64 bg-white/90 glass p-4 rounded-2xl shadow-2xl mb-4 border border-primary/20"
          >
            <p className="text-sm font-medium text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Yaxshi kayfiyat uchun musiqani yoqing
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className={`relative p-4 rounded-full shadow-2xl transition-all duration-500 group overflow-hidden ${
          isPlaying 
            ? 'bg-primary text-white scale-110' 
            : 'bg-white glass text-primary hover:bg-primary/10'
        }`}
      >
        <div className="relative z-10">
          {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </div>
        
        {isPlaying && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-primary/20 blur-xl pointer-events-none"
          />
        )}
        
        <audio 
          ref={audioRef}
          loop
          src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=spring-waltz-piano-1100.mp3"
          className="hidden"
        />
      </motion.button>
      
      {isPlaying && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -20, opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5, 
                delay: i * 0.3,
                ease: "easeOut" 
              }}
            >
              <Music className="w-3 h-3 text-primary" />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
