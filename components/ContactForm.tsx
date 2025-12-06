import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto bg-taiga rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-sand shadow-2xl shadow-taiga/20">
        
        {/* Background Texture Image */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop)' }}
        />
        
        {/* Gradient Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-solarLime/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-govBlue/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-widest text-solarLime mb-6">
              Свяжитесь с нами
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Готовы к <span className="text-transparent bg-clip-text bg-gradient-to-r from-solarLime to-white">росту?</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 font-sans leading-relaxed">
              Оставьте заявку на персональную демонстрацию платформы. Мы подготовим предложение, релевантное для вашего ведомства или ВУЗа.
            </p>
            <div className="flex items-center gap-4 text-sm text-white/60 bg-white/5 p-4 rounded-2xl backdrop-blur-sm inline-flex">
              <div className="flex -space-x-3">
                 <div className="w-8 h-8 rounded-full border-2 border-taiga bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80)'}}></div>
                 <div className="w-8 h-8 rounded-full border-2 border-taiga bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80)'}}></div>
                 <div className="w-8 h-8 rounded-full border-2 border-taiga bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80)'}}></div>
              </div>
              <p>Более 500 партнеров уже с нами</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden group">
            {/* Subtle gloss effect on form container */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
            
            {isSubmitted ? (
              <div className="h-[360px] flex flex-col items-center justify-center text-center animate-pulse-slow">
                <div className="w-20 h-20 bg-solarLime/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-solarLime" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Заявка принята</h3>
                <p className="text-white/70 max-w-xs mx-auto">Наш менеджер свяжется с вами в течение часа для уточнения деталей.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2 ml-1">Имя</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Иван Петров"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-solarLime focus:ring-1 focus:ring-solarLime transition-all hover:bg-black/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2 ml-1">Организация</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Название ВУЗа или Ведомства"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-solarLime focus:ring-1 focus:ring-solarLime transition-all hover:bg-black/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-2 ml-1">Телефон</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+7 (999) 000-00-00"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-solarLime focus:ring-1 focus:ring-solarLime transition-all hover:bg-black/30"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-solarLime text-taiga font-display font-bold py-4 rounded-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-solarLime/20"
                >
                  {isSubmitting ? 'Отправка...' : (
                    <>
                      Обсудить проект <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;