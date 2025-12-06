import React from 'react';
import { Map, Users, Building2, CheckCircle } from 'lucide-react';

const stats = [
  { label: "Регионов присутствия", value: "85", icon: Map },
  { label: "ВУЗов-партнеров", value: "120+", icon: Building2 },
  { label: "Пользователей платформы", value: "2M+", icon: Users },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white/60 backdrop-blur-md border border-taiga/5 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-taiga/5 overflow-hidden relative">
        
        {/* Decorative background blob */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-solarLime/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-govBlue/10 border border-govBlue/20 text-govBlue text-xs font-bold uppercase tracking-widest mb-4">
                О компании
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-taiga leading-tight">
                Архитектура <br/>
                <span className="text-govBlue">цифрового суверенитета</span>
              </h2>
            </div>
            
            <div className="prose prose-lg text-taiga/70 font-sans">
              <p>
                «Эковолна» — это федеральный оператор технологических решений, объединяющий государство, академическую среду и реальный сектор экономики в единую цифровую экосистему.
              </p>
              <p>
                Мы не просто внедряем софт. Мы создаем питательную среду, где талантливые кадры находят возможности, а государство получает прозрачные инструменты управления развитием человеческого капитала.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white/50 p-4 rounded-2xl border border-taiga/5">
                  <stat.icon className="w-6 h-6 text-govBlue mb-2" />
                  <div className="font-display text-3xl font-bold text-taiga">{stat.value}</div>
                  <div className="text-xs text-taiga/60 font-medium uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 items-center text-sm font-medium text-taiga/80 pt-2">
              <CheckCircle className="w-5 h-5 text-solarLime" />
              <span>Включено в реестр отечественного ПО</span>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative h-[500px] rounded-[2rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
              alt="Modern Office" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-taiga/60 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <blockquote className="font-display text-xl leading-snug mb-4">
                "Мы строим цифровое будущее, которое работает на благо общества, а не наоборот."
              </blockquote>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-sand/20 backdrop-blur-md flex items-center justify-center font-bold text-solarLime border border-white/20">
                    CEO
                 </div>
                 <div>
                    <div className="font-bold text-sm">Алексей Смирнов</div>
                    <div className="text-xs text-white/60">Генеральный директор</div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;