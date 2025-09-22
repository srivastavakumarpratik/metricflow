import React, { useEffect, useState, useRef } from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
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

  const plans = [
    {
      name: "One-Time Analysis",
      billing: "Complete audit & action plan",
      price: 497,
      popular: false,
      features: [
        "Complete revenue audit",
        "Detailed action plan",
        "2-week implementation support",
        "Results tracking dashboard"
      ]
    },
    {
      name: "Growth Partnership", 
      billing: "Monthly optimization",
      price: 1497,
      popular: true,
      features: [
        "Monthly revenue audits",
        "Ongoing optimization",
        "Priority implementation support",
        "Monthly strategy calls",
        "Custom reporting dashboard"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the level of support that fits your business needs. Both options start with a free discovery call.
          </p>
        </div>

        {/* Free Analysis Banner */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6 text-white" />
            <h3 className="text-2xl font-bold text-white">Free Discovery Call</h3>
          </div>
          <p className="text-blue-100 mb-6 text-lg">
            30-minute call to understand your business and identify initial opportunities. No obligation.
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Book Free Discovery Call
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-2xl p-8 text-center transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-500 scale-105 shadow-2xl shadow-blue-500/20' 
                  : 'border-gray-200 hover:border-blue-300 hover:scale-105'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.billing}</p>
              </div>

              <div className="mb-8">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  <span className="text-2xl">$</span>{plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Text */}
        <div className={`text-center mt-12 space-y-2 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-gray-600">
            💰 Money-back guarantee if we don't find at least $5,000/month in revenue opportunities
          </p>
          <p className="text-gray-600">
            📞 All packages start with a free discovery call • ⏰ No long-term contracts
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;