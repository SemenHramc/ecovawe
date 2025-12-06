import React from 'react';
import { ArrowUpRight, TrendingUp, Users, Clock } from 'lucide-react';

const cases = [
  {
    category: "Цифровой университет",
    title: "Единый кампус МГТУ им. Баумана",
    client: "Минобрнауки РФ",
    description: "Внедрение бесшовной среды для 30,000 студентов. От пропуска по FaceID до ИИ-помощника в выборе научного руководителя.",
    metric: "100% услуг онлайн",
    metricIcon: Clock,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", // University building
    color: "bg-govBlue"
  },
  {
    category: "Региональное управление",
    title: "Кадровый портал Татарстана",
    client: "Правительство РТ",
    description: "Агрегатор вакансий госструктур с автоматическим скорингом кандидатов и формированием кадрового резерва региона.",
    metric: "+45% скорость найма",
    metricIcon: TrendingUp,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop", // Modern meeting/government
    color: "bg-taiga"
  },
  {
    category: "EdTech & ИИ",
    title: "Адаптивное обучение ДВФУ",
    client: "Дальневосточный федеральный университет",
    description: "Система на базе ИИ, которая перестраивает учебный план студента в реальном времени в зависимости от успеваемости.",
    metric: "Рост GPA на 0.8 балла",
    metricIcon: Users,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", // Student studying
    color: "bg-solarLime text-taiga"
  }
];

const CasesSection: React.FC = () => {
  return (
    <section id="cases" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-taiga">
            Реализованные проекты
          </h2>
          <p className="text-taiga/80 max-w-2xl font-sans text-lg">
            Мы уже изменили цифровой ландшафт в 12 регионах. Вот несколько примеров того, как наши решения работают на практике.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-taiga/20 font-bold hover:bg-taiga hover:text-sand transition-all group">
          Смотреть все кейсы
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item, idx) => (
          <div 
            key={idx}
            className="group bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-taiga/10 transition-all duration-300 flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-full text-taiga">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="text-xs text-taiga/50 font-bold uppercase tracking-widest mb-2">
                Заказчик: {item.client}
              </div>
              <h3 className="font-display text-xl font-bold text-taiga mb-3 group-hover:text-govBlue transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-taiga/70 text-sm leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* Metric Badge */}
              <div className={`mt-auto p-4 rounded-2xl flex items-center gap-3 ${item.category === "EdTech & ИИ" ? "bg-solarLime/20" : "bg-govBlue/10"}`}>
                <div className={`p-2 rounded-full ${item.category === "EdTech & ИИ" ? "bg-solarLime text-taiga" : "bg-govBlue text-white"}`}>
                  <item.metricIcon className="w-4 h-4" />
                </div>
                <div>
                   <div className="text-xs font-bold uppercase tracking-wider opacity-60">Результат</div>
                   <div className="font-display font-bold text-taiga text-sm md:text-base">{item.metric}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="md:hidden mt-8 flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-taiga/20 font-bold hover:bg-taiga hover:text-sand transition-all w-full justify-center">
          Смотреть все кейсы
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default CasesSection;
