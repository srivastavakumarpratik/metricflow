import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

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

  return (
    <section ref={sectionRef} id="cta" className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-6 py-3 mb-8">
            <Calendar className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Free 30-Minute Discovery Call</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Uncover Your 
            <span className="block">Hidden Revenue?</span>
          </h2>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free discovery call to see what revenue opportunities we can identify in your business. 
            No obligation, just insights.
          </p>

          <button 
            onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
            className="group bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 mx-auto"
          >
            <span>Book Your Free Call</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-8 space-y-2">
            <p className="text-blue-100 text-sm">
              ✓ 30-minute call with revenue optimization expert • ✓ No sales pitch, just value • ✓ Immediate actionable insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;