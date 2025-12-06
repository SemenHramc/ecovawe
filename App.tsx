import React from 'react';
import Navbar from './components/Navbar';
import Globe from './components/Globe';
import Marquee from './components/Marquee';
import BentoGrid from './components/BentoGrid';
import AboutSection from './components/AboutSection';
import CasesSection from './components/CasesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand text-taiga font-sans selection:bg-solarLime selection:text-taiga relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
        
        {/* Atmospheric Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-solarLime/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-govBlue/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="relative z-20 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/60 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-solarLime animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-taiga/80">Социальные инновации 2.0</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-taiga drop-shadow-sm">
              Цифровой рост на <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-govBlue to-taiga">
                живой почве
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-taiga/80 max-w-lg leading-relaxed font-medium">
              Федеральный оператор социально-значимых цифровых решений.
            </p>
            <p className="text-base text-taiga/60 max-w-lg leading-relaxed -mt-4 border-l-2 border-solarLime pl-4">
              Комплексное развитие регионов и университетов через Образование, Карьеру и Искусственный интеллект.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="group bg-taiga text-sand px-8 py-4 rounded-full font-display font-bold hover:bg-govBlue transition-all flex items-center gap-2 shadow-xl shadow-taiga/20 active:scale-95">
                Начать проект
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-display font-bold border border-taiga/20 hover:bg-white/50 hover:border-taiga/40 transition-all text-taiga backdrop-blur-sm">
                О компании
              </button>
            </div>
          </div>

          {/* Right Content - Globe Only */}
          <div className="relative h-[450px] md:h-[650px] w-full flex items-center justify-center animate-fade-up" style={{animationDelay: '0.2s'}}>
             <Globe />
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <Marquee />

      {/* About Company Section - Moved Higher */}
      <AboutSection />

      {/* Services Bento Grid */}
      <BentoGrid />

      {/* Projects / Cases Section */}
      <CasesSection />

      {/* CTA / Mock Form */}
      <ContactForm />

      {/* Full Footer */}
      <Footer />
    </div>
  );
};

export default App;