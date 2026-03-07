import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, Heart, Flower2 } from 'lucide-react';

const messages = [
  "Siz bu kunning eng go‘zal qahramonisiz 💐",
  "Hayotingiz doimo sevgi va baxtga to‘lsin 🎁",
  "Siz eng yaxshi tilaklarga loyiqsiz 💖",
  "8-Mart muborak bo‘lsin, aziz qizlar 🌷",
  "Sizning tabassumingiz dunyoni yoritadi ✨",
  "Qalbingiz bahordek hamisha yosh bo‘lsin ☀️",
  "Siz bor joyda bayram bor, aziz ayol! 🌹"
];

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    
    setIsOpen(true);
    setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    
    // Confetti effect
    const end = Date.now() + 1 * 1000;
    const colors = ['#E11D48', '#FB7185', '#FBBF24', '#FFFFFF'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-12 text-primary">Kutilmagan Sovg‘a</h2>
        
        <div className="relative h-64 flex flex-col items-center justify-center cursor-pointer group" onClick={handleOpen}>
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="closed"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1.1 }}
                className="relative z-20"
              >
                <div className="p-8 bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl animate-float">
                  <Gift className="w-24 h-24 text-white" />
                </div>
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-10 h-10 text-secondary animate-pulse" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="glass rounded-3xl p-10 max-w-md shadow-2xl relative z-10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="mb-6 flex justify-center"
                >
                  <Flower2 className="w-16 h-16 text-primary animate-bounce" />
                </motion.div>
                <h3 className="text-2xl font-serif mb-4 text-primary">Siz uchun sovg‘a!</h3>
                <p className="text-lg italic text-muted-foreground leading-relaxed">
                  "{currentMessage}"
                </p>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="mt-8 text-sm text-primary hover:underline flex items-center gap-1 mx-auto"
                >
                  Qayta ochish <Heart className="w-3 h-3" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
          <p className="mt-8 text-muted-foreground font-medium animate-pulse">
            {!isOpen ? "Sovg‘ani ochish uchun bosing" : "Siz har kuni bayramga loyiqsiz"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GiftBox;
