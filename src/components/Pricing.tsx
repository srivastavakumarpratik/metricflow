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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Monthly",
      billing: "Billed monthly",
      price: 149,
      savings: null,
      popular: false
    },
    {
      name: "Quarterly", 
      billing: "Billed quarterly",
      price: 129,
      savings: "13% savings",
      popular: false
    },
    {
      name: "Semi-Annual",
      billing: "Billed every 6 months", 
      price: 119,
      savings: "20% savings",
      popular: true
    },
    {
      name: "Yearly",
      billing: "Billed annually",
      price: 99,
      savings: "33% savings", 
      popular: false
    }
  ];

  const features = [
    "AI-powered insights team",
    "Weekly action reports", 
    "Revenue optimization",
    "Priority support"
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 lg:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
            Start With Free Growth Analysis
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're so confident in our results, we'll analyze your store free for 1 month. See the revenue opportunities before you pay anything.
          </p>
        </div>

        {/* Free Analysis Banner */}
        <div className={`bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="h-6 w-6 text-white" />
            <h3 className="text-2xl font-bold text-white">Free 1-Month Growth Analysis</h3>
          </div>
          <p className="text-emerald-100 mb-6 text-lg">
            Complete setup + 4 weekly reports + custom dashboard. No payment required.
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Apply for Free Analysis
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-900 border rounded-2xl p-8 text-center transition-all duration-300 transform ${
                plan.popular 
                  ? 'border-emerald-500 scale-105 shadow-2xl shadow-emerald-500/20' 
                  : 'border-slate-700 hover:border-emerald-500/50 hover:scale-105'
              } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-100 mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.billing}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  <span className="text-2xl">$</span>{plan.price}
                  <span className="text-lg text-slate-400">/mo</span>
                </div>
                {plan.savings && (
                  <div className="text-emerald-400 font-semibold text-sm">{plan.savings}</div>
                )}
              </div>

              <ul className="space-y-3 mb-8 text-left">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
                {plan.savings && (
                  <li className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-emerald-400 text-sm font-medium">{plan.savings}</span>
                  </li>
                )}
              </ul>

              <button 
                onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    : 'bg-slate-700 hover:bg-emerald-500 text-slate-300 hover:text-white'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        {/* Guarantee Text */}
        <div className={`text-center space-y-2 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-slate-400">
            🎯 Complete 1-month analysis includes: Setup + Dashboard + 4 Weekly Reports • Zero risk, see results first
          </p>
          <p className="text-slate-400">
            💰 No payment during analysis period • ⏰ No obligations • 📊 Keep all insights regardless
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;