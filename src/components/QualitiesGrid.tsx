import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, Smile, Crown, Star } from 'lucide-react';

const qualities = [
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Mehr",
    desc: "Sizning mehringiz eng oddiy kunni ham go‘zal qiladi.",
    color: "bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    title: "Go‘zallik",
    desc: "Sizning ichki va tashqi go‘zalligingiz hayotimizning eng yorqin sahifasi.",
    color: "bg-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all duration-300"
  },
  {
    icon: <Sun className="w-8 h-8 text-primary" />,
    title: "Ilhom",
    desc: "Sizning orzularingiz va ishonchingiz boshqalarga motivatsiya beradi.",
    color: "bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300"
  },
  {
    icon: <Smile className="w-8 h-8 text-secondary" />,
    title: "Nazokat",
    desc: "Sizning nafisligingiz va odobingiz hayotga chiroy qo‘shadi.",
    color: "bg-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all duration-300"
  },
  {
    icon: <Crown className="w-8 h-8 text-primary" />,
    title: "Kuch",
    desc: "Sizning chidamingiz va irodangiz har qanday qiyinchilikdan ustun.",
    color: "bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-300"
  },
  {
    icon: <Star className="w-8 h-8 text-secondary" />,
    title: "Qadriyat",
    desc: "Sizning oila va jamiyatdagi o‘rningiz beqiyos va qadrlidir.",
    color: "bg-secondary/5 border-secondary/20 hover:bg-secondary/10 transition-all duration-300"
  }
];

const QualitiesGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Nega Siz Maxsus?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Har bir ayol bu dunyoni o‘zgacha nur bilan to‘ldiradi. Sizdagi bu fazilatlar har doim ardoqlanishga loyiq.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {qualities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`glass p-8 rounded-3xl border ${item.color} group relative overflow-hidden`}
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            
            <div className="mb-6 p-4 rounded-2xl bg-white w-fit shadow-lg shadow-black/5">
              {item.icon}
            </div>
            
            <h3 className="text-2xl font-serif mb-4 text-primary">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QualitiesGrid;
