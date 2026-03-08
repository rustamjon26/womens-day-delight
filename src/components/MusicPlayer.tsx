import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Silently handle autoplay restrictions
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full right-0 mb-3 w-56 bg-white/95 glass p-3 rounded-xl shadow-xl border border-primary/20"
          >
            <p className="text-xs md:text-sm font-medium text-primary flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Musiqani yoqing</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleMusic}
        aria-label={isPlaying ? "Musiqani o'chirish" : "Musiqani yoqish"}
        className={`relative p-3.5 md:p-4 rounded-full shadow-xl transition-all duration-300 overflow-hidden ${
          isPlaying
            ? 'bg-primary text-white'
            : 'bg-white glass text-primary hover:bg-primary/5'
        }`}
      >
        <div className="relative z-10">
          {isPlaying ? <Volume2 className="w-5 h-5 md:w-6 md:h-6" /> : <VolumeX className="w-5 h-5 md:w-6 md:h-6" />}
        </div>

        {isPlaying && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-primary/15 blur-lg pointer-events-none"
          />
        )}

        <audio
          ref={audioRef}
          loop
          preload="metadata"
          src="https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=spring-waltz-piano-1100.mp3"
          className="hidden"
        />
      </motion.button>

      <AnimatePresence>
        {isPlaying && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -15, opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.25,
                  ease: 'easeOut'
                }}
              >
                <Music className="w-3 h-3 text-primary" />
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;
