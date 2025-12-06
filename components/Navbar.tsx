import React from 'react';
import { Menu, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
      <div className="w-full max-w-7xl bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-taiga p-1.5 rounded-full">
            <Leaf className="w-5 h-5 text-solarLime" />
          </div>
          <span className="font-display font-bold text-taiga text-lg tracking-tight">Эковолна</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['О платформе', 'Решения', 'Кейсы', 'Контакты'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="font-sans text-sm font-medium text-taiga/80 hover:text-govBlue transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-taiga text-sand px-5 py-2 rounded-full font-display text-xs font-bold uppercase tracking-wider hover:bg-govBlue transition-colors">
            Вход
          </button>
          <button className="md:hidden text-taiga">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;