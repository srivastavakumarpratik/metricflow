import React, { useEffect, useState, useRef } from 'react';
import { X, Check } from 'lucide-react';

const Problem = () => {
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

  const problems = [
    '"Revenue dropped 15% this week"',
    '"Cart abandonment is at 67%"', 
    '"Traffic is down 8%"',
    '"Conversion rate: 1.2%"'
  ];

  const solutions = [
    '"Revenue dropped because mobile checkout breaks on iOS"',
    '"Cart abandonment: Remove shipping calculator popup"',
    '"Traffic down: Your Google ads need negative keywords"',
    '"Conversion boost: Add urgency messaging to product pages"'
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
            Your Dashboard Tells You <em className="text-slate-400">What</em> Happened
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            But growing your business requires knowing <strong className="text-emerald-400">WHY</strong> it happened and <strong className="text-emerald-400">WHAT</strong> to do next.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <X className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400">What You See Now</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{problem}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-slate-400 italic text-center">
                  Numbers without direction → No action taken
                </p>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Check className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400">What You Need</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{solution}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                <p className="text-emerald-400 italic text-center font-medium">
                  Actionable insights → Revenue growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;