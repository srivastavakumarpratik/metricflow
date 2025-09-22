import React, { useEffect, useState, useRef } from 'react';
import { FileText, Phone, Settings, BarChart3, MessageCircle, Search, TrendingUp, Clock } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      icon: FileText,
      title: "Discovery Call",
      description: "30-minute call to understand your business, goals, and current challenges.",
      timeline: "Day 1",
      color: "blue"
    },
    {
      icon: Settings,
      title: "Data Integration", 
      description: "We connect to your analytics platforms and set up tracking for key metrics.",
      timeline: "Days 2-5",
      color: "green"
    },
    {
      icon: Search,
      title: "Deep Analysis",
      description: "Our experts analyze your data to identify revenue opportunities and bottlenecks.",
      timeline: "Days 6-10",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Action Plan",
      description: "Receive a prioritized list of improvements with expected revenue impact.",
      timeline: "Day 14",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Results in 2 weeks</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Identify Your Revenue Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven 4-step process that uncovers exactly what's limiting your growth and how to fix it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = getColorClasses(step.color);
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${200 + index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="relative bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-300 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className={`p-3 ${colorClasses} rounded-xl inline-block mb-4 mt-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    {step.timeline}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Results Timeline */}
        <div className={`mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What You Get</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Day 14</div>
                <p className="text-gray-700 font-medium">Complete Analysis Report</p>
                <p className="text-sm text-gray-600">Detailed findings & action plan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Week 3-4</div>
                <p className="text-gray-700 font-medium">Implementation Support</p>
                <p className="text-sm text-gray-600">Help implementing changes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Week 6-8</div>
                <p className="text-gray-700 font-medium">Results Tracking</p>
                <p className="text-sm text-gray-600">Measure revenue impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;