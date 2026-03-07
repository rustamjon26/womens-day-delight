import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const compliments = [
  "Siz bahordek nafis va go‘zalsiz 🌸",
  "Tabassumingiz atrofga nur ulashadi ✨",
  "Siz mehr va go‘zallik timsolisiz 💖",
  "Siz bor joyda kayfiyat ham chiroyli bo‘ladi 🌷",
  "Siz ilhom baxsh etuvchi insonsiz 🌹",
  "Sizning qalbingiz bahordek iliq ☀️",
  "Sizning borligingiz dunyoni go‘zal qiladi ✨",
  "Siz har qanday guldan-da nafosatlisiz 🌺",
  "Sizning mehringiz beqiyosdir 💞",
  "Siz hayotning eng shirin tuhfasisiz 🍭",
  "Sizning samimiyligingiz mo‘jizadek gap 🦄",
  "Siz har doim eng yaxshi tilaklarga loyiqsiz 💝"
];

const ComplimentGenerator: React.FC = () => {
  const [currentCompliment, setCurrentCompliment] = useState(compliments[0]);
  const [count, setCount] = useState(0);

  const generateNew = () => {
    let next;
    do {
      next = compliments[Math.floor(Math.random() * compliments.length)];
    } while (next === currentCompliment);
    
    setCurrentCompliment(next);
    setCount(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-primary">Iliq So‘zlar Ummoni</h2>
        
        <div className="h-32 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentCompliment}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="text-xl md:text-2xl font-medium leading-relaxed italic"
            >
              "{currentCompliment}"
            </motion.p>
          </AnimatePresence>
        </div>

        <button
          onClick={generateNew}
          className="group relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/30"
        >
          <span className="relative z-10 flex items-center gap-2">
            Yangi kompliment <Sparkles className="w-4 h-4 animate-pulse" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-border-beam opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
        
        <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          Bugun {count} ta iliq tilak ochildi
        </p>
      </motion.div>
    </div>
  );
};

export default ComplimentGenerator;
