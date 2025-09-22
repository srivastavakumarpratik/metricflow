import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              MetricFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 relative group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
            >
              Apply Free Analysis
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-slate-300 hover:text-emerald-400 transition-colors py-2"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
                className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 mt-4"
              >
                Apply Free Analysis
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;