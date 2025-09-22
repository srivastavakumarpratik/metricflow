import React, { useEffect, useState } from 'react';
import { TrendingUp, ArrowRight, Play } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Text */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Expert Analytics Team</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stop Guessing.
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                Start Growing
              </span>.
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Your dashboard shows you what happened. Our analytics experts tell you exactly what to do next. 
              Get the same strategic insights as a $2,000/month consultant with our proven growth methodology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-2"
              >
                <span>Apply for Free Analysis</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="group border border-slate-600 hover:border-emerald-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>See How It Works</span>
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;