import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleApply = () => {
    window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank');
  };

  return (
    <section ref={sectionRef} id="cta" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <Zap className="h-5 w-5 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Ready to Transform Your Business?</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
            Ready to See Your 
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {' '}Hidden Revenue
            </span>?
          </h2>

          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Apply for your free 1-month growth analysis. We'll show you exactly how much revenue 
            you're leaving on the table.
          </p>

          <button 
            onClick={handleApply}
            className="group bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 flex items-center space-x-3 mx-auto"
          >
            <span>Apply for Free Analysis</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-6 space-y-2">
            <p className="text-slate-400 text-sm">
              Limited spots available • Stores $100K+ revenue only • No payment required
            </p>
            <div className="flex items-center justify-center space-x-6 text-xs text-slate-500">
              <span>✓ No obligations</span>
              <span>✓ Keep all insights</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;