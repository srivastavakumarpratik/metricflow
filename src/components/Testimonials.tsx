import React, { useEffect, useState, useRef } from 'react';
import { Star, ArrowUp } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      result: "+$17k/month",
      quote: "MetricFlow found that our shipping costs were killing conversions. The fix was simple but our previous costs were crazy.",
      company: "EcoClean Supply",
      industry: "Home cleaning • $340k/mo",
      color: "emerald"
    },
    {
      result: "+133% Conversion",
      quote: "They identified exactly which part of our mobile checkout was broken. The fix doubled our conversion rate overnight.",
      company: "FashionWave", 
      industry: "Apparel • 1.2% → 4.4% conversion",
      color: "blue"
    },
    {
      result: "+$35k/month",
      quote: "We were targeting thousands of keywords. MetricFlow found the wrong Facebook audiences. Reallocation saved our ROAS.",
      company: "TechGear Pro",
      industry: "Electronics • $590k/mo → $1.24M/mo",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "text-emerald-400",
      blue: "text-blue-400", 
      purple: "text-purple-400"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="results" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
            Real Stores, Real Results
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how actionable insights translate to revenue growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${200 + index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                {/* Quote mark */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    "
                  </div>
                </div>

                <div className="pt-6">
                  <div className={`text-3xl font-bold mb-4 ${getColorClasses(testimonial.color)} flex items-center`}>
                    <ArrowUp className="h-6 w-6 mr-2" />
                    {testimonial.result}
                  </div>

                  <p className="text-slate-300 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t border-slate-700 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-slate-100 font-bold mb-1">
                          {testimonial.company}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {testimonial.industry}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;