import React from 'react';
import { Leaf, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-taiga text-sand pt-16 pb-8 rounded-t-[2.5rem] mt-10 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-sand/10 p-2 rounded-full backdrop-blur-sm border border-white/10">
                <Leaf className="w-5 h-5 text-solarLime" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">Эковолна</span>
            </div>
            <p className="text-white/60 font-sans leading-relaxed max-w-sm">
              Оператор социально-значимых цифровых решений.
            </p>
            
            <div className="pt-4">
               <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 block">Мы в соцсетях</span>
               <div className="flex gap-3">
                {['VK', 'Telegram', 'Dzen'].map((social) => (
                  <a key={social} href="#" className="h-10 px-4 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-govBlue hover:border-govBlue transition-all text-xs font-bold text-white/80 hover:text-white group">
                    {social}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Links Column 1 - Competencies */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white mb-6">Компетенции</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Развитие карьеры</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Образование</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Маркетинг</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Аналитика</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Искусственный интеллект</a></li>
            </ul>
          </div>

          {/* Links Column 2 - Documents */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-white mb-6">Документы</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Лицензии</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">ГОСТ Р ИСО</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Реестр ПО</a></li>
              <li><a href="#" className="hover:text-solarLime transition-colors inline-block">Политика конфиденциальности</a></li>
            </ul>
          </div>

          {/* Contacts Column */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-white mb-6">Контакты</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-solarLime shrink-0 mt-0.5" />
                <span>420500, г. Иннополис,<br/>ул. Университетская, д. 1</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-solarLime shrink-0" />
                <a href="tel:88005553535" className="hover:text-white transition-colors">8 (800) 555-35-35</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-solarLime shrink-0" />
                <a href="mailto:info@ekovolna.ru" className="hover:text-white transition-colors">info@ekovolna.ru</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-sans">
          <p>&copy; 2025 ООО «Эковолна». Все права защищены.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            <a href="#" className="hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;