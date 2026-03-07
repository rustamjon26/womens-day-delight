import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Heart, Sparkles, Send, RefreshCcw } from 'lucide-react';

const PersonalizedGreeting: React.FC = () => {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Iltimos, ismingizni kiriting 🌸');
      return;
    }
    setError('');
    setSubmittedName(name);
  };

  const reset = () => {
    setSubmittedName('');
    setName('');
  };

  return (
    <div id="greeting" className="w-full max-w-4xl mx-auto px-4 py-24 min-h-[600px] flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {!submittedName ? (
          <motion.div
            key="input-form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="w-full max-w-lg glass p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="mb-10 inline-flex p-6 rounded-full bg-primary/5 text-primary">
              <User className="w-12 h-12" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-primary">Shaxsiy Tabrik</h2>
            <p className="text-muted-foreground mb-10 text-lg">Ismingizni kiriting va o‘zingiz uchun maxsus tayyorlangan tabrikni qabul qiling 🌷</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ismingizni kiriting"
                  className={`w-full px-8 py-5 rounded-full glass border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg ${
                    error ? 'border-destructive animate-shake' : 'border-primary/20 group-hover:border-primary/40'
                  }`}
                />
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-7 left-6 text-sm text-destructive font-medium"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
              
              <button
                type="submit"
                className="w-full py-5 bg-primary text-white rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Tabrikni ko‘rish</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="greeting-card"
            initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
            transition={{ type: 'spring', damping: 15, duration: 0.8 }}
            className="w-full max-w-2xl glass p-10 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden text-center border-2 border-primary/20 bg-gradient-to-br from-white/60 to-primary/5"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 opacity-20"
            >
              <Heart className="w-48 h-48 text-primary" />
            </motion.div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="inline-flex gap-2 mb-8">
                  <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
                  <Heart className="w-8 h-8 text-primary animate-pulse delay-75" />
                  <Sparkles className="w-8 h-8 text-secondary animate-pulse delay-150" />
                </div>
                
                <h3 className="text-4xl md:text-6xl font-serif mb-8 text-primary leading-tight">
                  <span className="text-gradient font-bold">{submittedName}</span>, <br />
                  8-Mart muborak!
                </h3>
                
                <p className="text-xl md:text-2xl italic text-muted-foreground leading-relaxed mb-12">
                  "Sizni International Women’s Day bilan chin qalbdan tabriklaymiz! 🌷 Sizga bahordek beg‘uborlik, go‘zal baxt, so‘nmas quvonch va doimo go‘zallik tilaymiz. Hayotingiz faqat quvonchli lahzalarga to‘la bo‘lsin."
                </p>
                
                <button
                  onClick={reset}
                  className="px-10 py-4 border-2 border-primary/20 text-primary rounded-full font-semibold hover:bg-primary/5 transition-all flex items-center gap-2 mx-auto group"
                >
                  <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Yana boshqa ism kiritish
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
