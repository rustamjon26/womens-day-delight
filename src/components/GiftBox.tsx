import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, Heart, Flower2 } from 'lucide-react';

const messages = [
  "Siz bu kunning eng go'zal qahramonisiz",
  "Hayotingiz doimo sevgi va baxtga to'lsin",
  "Siz eng yaxshi tilaklarga loyiqsiz",
  "8-Mart muborak bo'lsin",
  "Sizning tabassumingiz dunyoni yoritadi",
  "Qalbingiz bahordek hamisha yosh bo'lsin",
  "Siz bor joyda bayram bor",
  "Sizning go'zalligingiz beqiyos",
  "Siz mehr va issiqlik timsolisiz"
];

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const launchConfetti = () => {
    const duration = 1200;
    const end = Date.now() + duration;
    const colors = ['#E11D48', '#FB7185', '#FBBF24'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    launchConfetti();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 md:py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-10 text-primary">Sizga Sovg'a</h2>

        <div className="relative min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="closed"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180, filter: 'blur(10px)' }}
                whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                onClick={handleOpen}
                className="relative z-20 cursor-pointer"
              >
                <div className="p-10 bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl shadow-2xl animate-float">
                  <Gift className="w-20 h-20 text-white" />
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="absolute -top-3 -right-3"
                >
                  <Sparkles className="w-8 h-8 text-secondary" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.5, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ type: 'spring', damping: 18, stiffness: 120 }}
                className="glass rounded-3xl p-8 md:p-10 max-w-md w-full shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                  className="mb-6 flex justify-center"
                >
                  <div className="p-4 rounded-full bg-primary/5">
                    <Flower2 className="w-12 h-12 text-primary" />
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-serif mb-4 text-primary"
                >
                  Siz uchun maxsus!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg italic text-muted-foreground leading-relaxed"
                >
                  "{currentMessage}"
                </motion.p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="mt-8 px-6 py-2 text-sm text-primary hover:bg-primary/5 rounded-full transition-colors flex items-center gap-2 mx-auto border border-primary/20"
                >
                  <Heart className="w-4 h-4" />
                  Qayta ochish
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p
            key={isOpen ? 'open-text' : 'closed-text'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-muted-foreground font-medium"
          >
            {!isOpen ? "Sovg'ani ochish uchun bosing" : "Siz har kuni bayramga loyiqsiz"}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default GiftBox;
