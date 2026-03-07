import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown, Flower2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      
      <motion.div
        initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 space-y-8"
      >
        <div className="inline-flex gap-4 mb-8">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="p-4 rounded-full bg-primary/10 text-primary shadow-xl shadow-primary/10"
          >
            <Flower2 className="w-10 h-10" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
            className="p-4 rounded-full bg-secondary/10 text-secondary shadow-xl shadow-secondary/10"
          >
            <Sparkles className="w-10 h-10" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            className="p-4 rounded-full bg-primary/10 text-primary shadow-xl shadow-primary/10"
          >
            <Heart className="w-10 h-10" />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-primary leading-tight font-bold drop-shadow-xl">
          8-Mart Muborak <br />
          <span className="text-gradient">Bo‘lsin!</span>
        </h1>
        
        <p className="text-xl md:text-3xl max-w-3xl mx-auto text-muted-foreground font-medium italic leading-relaxed">
          "Dunyoning eng nafis gullari, bahorning eng iliq nuri va hayotning eng go‘zal qahramonlari bo‘lgan ayollar, bayramingiz bilan!"
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('greeting')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-primary text-white rounded-full font-bold text-xl shadow-2xl shadow-primary/30 flex items-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10">Tabrikni ochish</span>
            <Heart className="w-5 h-5 group-hover:scale-125 transition-transform relative z-10 fill-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          
          <button
            onClick={() => document.getElementById('compliments')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white glass text-primary rounded-full font-bold text-xl hover:bg-primary/5 transition-all flex items-center gap-3 border border-primary/20 shadow-xl"
          >
            Ismingiz bilan tabrik oling <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary flex flex-col items-center gap-2"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em]">Pastga tushing</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
