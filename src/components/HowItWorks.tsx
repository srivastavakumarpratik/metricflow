import React, { useEffect, useState, useRef } from 'react';
import { FileText, Phone, Settings, BarChart3, MessageCircle, Search, TrendingUp, RotateCcw } from 'lucide-react';

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

  const setupSteps = [
    {
      icon: FileText,
      title: "Business Discovery",
      description: "Day 1: Complete our strategic questionnaire about your business goals, challenges, and current performance.",
      step: "1"
    },
    {
      icon: Phone,
      title: "Strategy Call",
      description: "Days 2-3: 45-minute onboarding call with our analytics expert to understand your unique business model.",
      step: "2"
    },
    {
      icon: Settings,
      title: "Custom Setup", 
      description: "Days 4-10: We configure your personalized analytics framework and establish baseline metrics.",
      step: "3"
    }
  ];

  const weeklySteps = [
    {
      icon: BarChart3,
      title: "Monday: Dashboard Review",
      description: "Access your live dashboard. We review your weekly performance and identify focus areas.",
      day: "Mon"
    },
    {
      icon: MessageCircle,
      title: "Tuesday: Check-in",
      description: "Brief questionnaire about current challenges, experiments, or specific areas you want us to investigate.",
      day: "Tue"
    },
    {
      icon: Search,
      title: "Wed-Thu: Deep Analysis",
      description: "Our team conducts expert analysis using advanced tools to identify opportunities and strategies.",
      day: "Wed-Thu"
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
            How We Work Together
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A proven process that starts with deep setup, then delivers weekly growth insights every single week.
          </p>
        </div>

        {/* Initial Setup Phase */}
        <div className="mb-20">
          <div className={`text-center mb-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-4">
              <FileText className="h-5 w-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Initial Setup Phase (Weeks 1-2)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {setupSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 delay-${300 + index * 100} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                >
                  <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center hover:border-emerald-500/50 transition-all duration-300 h-full">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>
                    <div className="p-3 bg-emerald-500/10 rounded-xl inline-block mb-4 mt-4">
                      <Icon className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 mb-3">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Cycle */}
        <div className={`relative bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border-2 border-emerald-500/20 rounded-3xl p-8 lg:p-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold text-sm">
              REPEATS EVERY WEEK
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-4">
              <RotateCcw className="h-5 w-5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Weekly Growth Cycle (Starting Week 3)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {weeklySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-emerald-500 text-white px-3 py-1 rounded-full font-bold text-xs">
                      {step.day}
                    </div>
                  </div>
                  <div className="p-3 bg-emerald-500/20 rounded-xl inline-block mb-4 mt-4">
                    <Icon className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-3">{step.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-emerald-500 text-white px-8 py-4 rounded-2xl inline-block font-semibold text-lg mb-6">
              <TrendingUp className="inline-block h-5 w-5 mr-2" />
              Friday: You Receive Your Weekly Growth Report
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl text-emerald-400 mb-2">↻</div>
              <p className="text-emerald-400 font-semibold">Process repeats next Monday with fresh insights</p>
            </div>
          </div>
        </div>

        {/* Timeline Summary */}
        <div className={`mt-12 text-center bg-slate-800/50 rounded-2xl p-8 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h3 className="text-xl font-bold text-slate-100 mb-6">📅 Complete Timeline</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Week 1-2</div>
              <p className="text-slate-300">Setup & Onboarding</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Week 3+</div>
              <p className="text-slate-300">Weekly Growth Reports</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">Ongoing</div>
              <p className="text-slate-300">Continuous Optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;