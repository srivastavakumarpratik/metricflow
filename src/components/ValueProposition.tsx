import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

const ValueProposition = () => {
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
    'Revenue dropped 15% but you don\'t know why',
    'Cart abandonment at 67% with no clear solution', 
    'Traffic declining but can\'t identify the cause',
    'Low conversion rates with no actionable insights'
  ];

  const solutions = [
    'Mobile checkout breaks on iOS - fix recovers $4.2k/month',
    'Shipping calculator popup causes abandonment - remove it',
    'Google Ads targeting wrong keywords - reallocate budget',
    'Product pages missing urgency - add countdown timers'
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stop Analyzing. Start <span className="text-blue-600">Acting</span>.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most analytics tell you what happened. We tell you exactly what to do next to grow revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem Card */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-600">Traditional Analytics</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium text-center">
                  Data without direction = No action taken
                </p>
              </div>
            </div>
          </div>

          {/* Solution Card */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-600">MetricFlow Analysis</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{solution}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-700 font-medium text-center">
                  Actionable insights = Immediate revenue growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <button 
            onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25 flex items-center space-x-2 mx-auto"
          >
            <span>See What We'd Find in Your Store</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;