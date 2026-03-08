import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const compliments = [
  "Siz bahordek nafis va go'zalsiz",
  "Tabassumingiz atrofga nur ulashadi",
  "Siz mehr va go'zallik timsolisiz",
  "Siz bor joyda kayfiyat ham chiroyli bo'ladi",
  "Siz ilhom baxsh etuvchi insonsiz",
  "Sizning qalbingiz bahordek iliq",
  "Sizning borligingiz dunyoni go'zal qiladi",
  "Siz har qanday guldan ham nafosatlisiz",
  "Sizning mehringiz beqiyos",
  "Siz hayotning eng shirin tuhfasisiz",
  "Sizning samimiyligingiz mo'jiza",
  "Siz har doim eng yaxshi tilaklarga loyiqsiz",
  "Sizning go'zallgingiz ichki nurdan kelib chiqadi",
  "Siz atrofingizga issiqlik tarqatasiz",
  "Sizning kuchingiz va zarifligingiz hayratlanarli"
];

const ComplimentGenerator: React.FC = () => {
  const [currentCompliment, setCurrentCompliment] = useState(compliments[0]);
  const [count, setCount] = useState(0);

  const generateNew = () => {
    let next;
    do {
      next = compliments[Math.floor(Math.random() * compliments.length)];
    } while (next === currentCompliment && compliments.length > 1);

    setCurrentCompliment(next);
    setCount(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 md:py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group shadow-xl"
      >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
          <Sparkles className="w-24 h-24 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-serif mb-8 text-primary">Iliq So'zlar</h2>

        <div className="min-h-[120px] flex items-center justify-center mb-8 px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentCompliment}
              initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(5px)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-xl md:text-2xl font-medium leading-relaxed italic text-primary"
            >
              "{currentCompliment}"
            </motion.p>
          </AnimatePresence>
        </div>

        <button
          onClick={generateNew}
          className="relative px-8 py-4 bg-primary text-white rounded-full font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/30 group/btn"
        >
          <span className="relative z-10 flex items-center gap-2">
            Yangi so'z olish <Sparkles className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
          </span>
        </button>

        {count > 0 && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2"
          >
            <Heart className="w-4 h-4 text-primary fill-primary" />
            {count} ta iliq so'z o'qildi
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ComplimentGenerator;
