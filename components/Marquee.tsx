import React from 'react';

const partners = [
  "МИНЦИФРЫ", "РОСАТОМ", "СБЕР", "ВШЭ", "МФТИ", "РЖД", "СКОЛКОВО", "ЯНДЕКС", "РОСТЕХ"
];

const Marquee: React.FC = () => {
  return (
    <section className="w-full py-12 relative z-20">
      
      {/* Explicit Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <span className="inline-block py-1 px-3 border border-taiga/10 rounded-full bg-white/30 backdrop-blur-sm text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-taiga/60">
          Стратегические партнеры
        </span>
      </div>

      {/* Marquee Track */}
      <div className="w-full py-8 border-y border-taiga/5 bg-whiteGlass backdrop-blur-sm overflow-hidden flex relative">
        <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
          {/* Render twice for seamless loop */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <span 
              key={index} 
              className="font-display font-bold text-2xl md:text-3xl text-taiga/30 hover:text-govBlue transition-colors cursor-default select-none"
            >
              {partner}
            </span>
          ))}
        </div>
         {/* Gradients to fade edges */}
         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sand to-transparent z-10" />
         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-sand to-transparent z-10" />
      </div>
    </section>
  );
};

export default Marquee;