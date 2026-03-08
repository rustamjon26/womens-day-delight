import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp, Flower2 } from 'lucide-react';

const FinalSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-primary/10 to-transparent pt-20 md:pt-24 pb-8 md:pb-12 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/10 backdrop-blur-3xl z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex p-5 md:p-6 rounded-full bg-primary/10 text-primary mb-8 shadow-xl animate-float">
            <Heart className="w-12 h-12 md:w-16 md:h-16 fill-primary" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-8 text-primary drop-shadow-lg leading-tight">
            8-Mart muborak bo'lsin!
          </h2>

          <p className="text-lg md:text-2xl italic text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
            "Har doim yuzingizdan tabassum arimasin, qalbingizda baxt va ishonch bo'lsin. Sizlar doimo e'tibor, hurmat va eng go'zal tilaklarga loyiqsiz."
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6">
            <button
              onClick={() => document.getElementById('greeting')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-full font-bold text-base md:text-lg shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
            >
              Yana tabrik ko'rish <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button
              onClick={scrollToTop}
              className="px-8 md:px-10 py-4 md:py-5 bg-white glass border border-primary/20 text-primary rounded-full font-bold text-base md:text-lg hover:bg-primary/5 transition-all flex items-center justify-center gap-3 group"
            >
              Boshiga qaytish <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <div className="border-t border-primary/10 pt-8 md:pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 text-primary">
            <Flower2 className="w-7 h-7" />
            <span className="text-xl md:text-2xl font-serif font-bold">8-Mart Tabrigi</span>
          </div>

          <p className="text-sm md:text-base text-muted-foreground font-medium text-center order-last md:order-none">
            Bahor, go'zallik va mehr bayrami muborak
          </p>

          <div className="text-sm text-muted-foreground/70">
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FinalSection;
