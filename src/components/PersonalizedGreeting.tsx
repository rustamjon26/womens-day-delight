import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Sparkles, Send, RefreshCcw } from 'lucide-react';

const PersonalizedGreeting: React.FC = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Iltimos, ismingizni kiriting');
      return;
    }
    setError('');
    setSubmittedName(trimmedName);
  };

  const reset = () => {
    setSubmittedName('');
    setName('');
    setError('');
  };

  return (
    <div id="greeting" className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24 min-h-[600px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!submittedName ? (
          <motion.div
            key="input-form"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-lg glass p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

            <div className="mb-8 inline-flex p-5 rounded-full bg-primary/5 text-primary">
              <User className="w-10 h-10" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-primary">Shaxsiy Tabrik</h2>
            <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">Ismingizni kiriting va o'zingiz uchun maxsus tayyorlangan tabrikni qabul qiling</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Ismingizni kiriting"
                  autoComplete="off"
                  className={`w-full px-6 py-4 rounded-full glass border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/60 text-base md:text-lg ${
                    error ? 'border-destructive ring-4 ring-destructive/10' : 'border-primary/20 hover:border-primary/40'
                  }`}
                />
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-6 left-4 text-sm text-destructive font-medium"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-full font-bold text-base md:text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Tabrikni ko'rish</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="greeting-card"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.5, rotateY: -90, filter: 'blur(10px)' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100, duration: 0.8 }}
            className="w-full max-w-2xl glass p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden text-center border-2 border-primary/20 bg-gradient-to-br from-white/70 to-primary/5"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 opacity-10 pointer-events-none"
            >
              <Heart className="w-48 h-48 text-primary fill-primary" />
            </motion.div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="inline-flex gap-3 mb-8">
                  <Sparkles className="w-7 h-7 text-secondary animate-pulse" />
                  <Heart className="w-7 h-7 text-primary animate-pulse" style={{ animationDelay: '0.15s' }} />
                  <Sparkles className="w-7 h-7 text-secondary animate-pulse" style={{ animationDelay: '0.3s' }} />
                </div>

                <h3 className="text-3xl md:text-5xl font-serif mb-6 text-primary leading-tight">
                  <span className="text-gradient font-bold break-words">{submittedName}</span>, <br />
                  8-Mart muborak!
                </h3>

                <p className="text-lg md:text-xl italic text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
                  "Sizni Xalqaro Ayollar Kuni bilan chin qalbdan tabriklaymiz! Sizga bahordek yangilik, go'zal baxt, so'nmas quvonch va doimo go'zallik tilaymiz. Hayotingiz faqat yorug' lahzalarga to'la bo'lsin."
                </p>

                <button
                  onClick={reset}
                  className="px-8 py-3 border-2 border-primary/20 text-primary rounded-full font-semibold hover:bg-primary/5 transition-all flex items-center gap-2 mx-auto group"
                >
                  <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Boshqa ism kiritish
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalizedGreeting;
