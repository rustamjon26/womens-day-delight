import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp, Flower2, Instagram, Facebook, Share2 } from 'lucide-react';

const FinalSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-primary/10 to-transparent pt-24 pb-12 px-4 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/20 backdrop-blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex p-6 rounded-full bg-primary/10 text-primary mb-10 shadow-2xl animate-float">
            <Heart className="w-16 h-16 fill-primary" />
          </div>
          
          <h2 className="text-5xl md:text-8xl font-serif mb-10 text-primary drop-shadow-lg">
            8-Mart muborak bo‘lsin!
          </h2>
          
          <p className="text-xl md:text-3xl italic text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-16">
            "Har doim yuzingizdan tabassum arimasin, qalbingizda baxt va ishonch bo‘lsin. Sizlar doimo e’tibor, hurmat va eng go‘zal tilaklarga loyiqsiz."
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => document.getElementById('greeting')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-primary text-white rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all flex items-center gap-3 group"
            >
              Yana tabrik ko‘rish <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
            <button
              onClick={scrollToTop}
              className="px-10 py-5 bg-white glass border border-primary/20 text-primary rounded-full font-bold text-xl hover:bg-primary/5 transition-all flex items-center gap-3 group"
            >
              Boshiga qaytish <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-primary/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-primary">
            <Flower2 className="w-8 h-8" />
            <span className="text-2xl font-serif font-bold tracking-tight">8-Mart Delight</span>
          </div>
          
          <p className="text-muted-foreground font-medium text-center">
            Bahor, go‘zallik va mehr bayrami muborak bo‘lsin 🌷
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground/60 font-medium">
          © {new Date().getFullYear()} Women's Day Celebration. Created with Love.
        </div>
      </div>
    </footer>
  );
};

export default FinalSection;
