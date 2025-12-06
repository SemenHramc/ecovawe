import React from 'react';
import { BrainCircuit, Briefcase, GraduationCap, BarChart3, Megaphone, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';

const items: ServiceItem[] = [
  {
    title: "Образование",
    description: "Комплексные цифровые платформы для университетов и EdTech. LMS нового поколения и гибридные форматы обучения.",
    icon: GraduationCap,
    colSpan: "md:col-span-2 md:row-span-2",
    bgClass: "text-sand", 
    highlight: true,
    // Changed to a very bright, clean image (Modern architecture/Light) to avoid muddy look
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
  },
  {
    title: "Искусственный интеллект",
    description: "Предиктивные модели и нейросети для персонализации образовательных треков.",
    icon: BrainCircuit,
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "text-sand",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" // AI abstract brighter
  },
  {
    title: "Аналитика данных",
    description: "Дашборды для ректоров и министерств. Принимайте решения на основе цифр, а не интуиции.",
    icon: BarChart3,
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "text-sand",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" // Data charts
  },
  {
    title: "Развитие Карьеры",
    description: "Сервисы для трудоустройства выпускников и кадрового резерва. Стыковка талантов и рынка.",
    icon: Briefcase,
    colSpan: "md:col-span-2 md:row-span-1",
    bgClass: "text-white",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" // Modern Office/Skyscrapers
  },
  {
    title: "Маркетинг",
    description: "Продвижение образовательных брендов и социально-значимых проектов.",
    icon: Megaphone,
    colSpan: "md:col-span-1 md:row-span-1",
    bgClass: "text-white",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop" // Creative/Abstract
  },
];

const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-taiga">
          Экосистема решений
        </h2>
        <p className="text-taiga/80 max-w-2xl font-sans text-lg">
          Мы выступаем оператором полного цикла, закрывая потребности государства и бизнеса в ключевых цифровых доменах.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(240px,auto)]">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`
              ${item.colSpan} 
              ${item.bgClass}
              relative group overflow-hidden rounded-3xl p-6 md:p-8 
              transition-all duration-500 hover:shadow-2xl hover:shadow-taiga/20
              flex flex-col justify-between border border-taiga/5
            `}
          >
            {/* Background Image with Overlay */}
            {item.image && (
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Fixed Overlay: Reduced opacity (30%) and changed from green (taiga) to black for better contrast without muddiness */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Gradient only at the bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-taiga/90 via-transparent to-transparent opacity-90" />
              </>
            )}

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />

            {/* Header: Icon & Arrow */}
            <div className="relative z-10 flex justify-between items-start mb-4">
              <div className="p-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 group-hover:bg-solarLime/20 group-hover:border-solarLime/30 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-solarLime" />
              </div>
              <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3 tracking-wide drop-shadow-sm text-sand">
                {item.title}
              </h3>
              <p className="font-sans text-sm md:text-base leading-relaxed opacity-90 text-white/90 drop-shadow-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;