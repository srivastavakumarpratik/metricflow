import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
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

  const caseStudies = [
    {
      company: "EcoClean Supply",
      industry: "Home & Garden",
      revenue: "$340k/mo → $520k/mo",
      improvement: "+53% Revenue",
      problem: "High cart abandonment on mobile devices",
      solution: "Simplified checkout process and removed shipping calculator popup",
      result: "$17k additional monthly revenue",
      timeframe: "3 weeks",
      color: "blue"
    },
    {
      company: "FashionWave",
      industry: "Apparel",
      revenue: "1.2% → 4.4% conversion",
      improvement: "+267% Conversion",
      problem: "Low conversion rates across all traffic sources",
      solution: "Optimized product pages with urgency messaging and social proof",
      result: "Tripled conversion rate overnight",
      timeframe: "2 weeks",
      color: "green"
    },
    {
      company: "TechGear Pro",
      industry: "Electronics",
      revenue: "$590k/mo → $1.24M/mo",
      improvement: "+110% Revenue",
      problem: "Inefficient ad spend with low ROAS",
      solution: "Reallocated budget to high-value customer segments",
      result: "$35k additional monthly revenue",
      timeframe: "4 weeks",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-600",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our analysis helped these e-commerce stores identify and fix revenue-limiting issues.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${200 + index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300">
                  <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-6`}>
                    <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                      {study.improvement}
                    </div>
                    <div className="text-sm text-gray-600">{study.revenue}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                  <p className="text-sm text-gray-500 mb-4">{study.industry} • {study.timeframe} to results</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Problem:</span>
                      <p className="text-sm text-gray-600">{study.problem}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Solution:</span>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Result:</span>
                      <p className="text-sm text-gray-600">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA to full case studies */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Link 
            to="/case-studies"
            className="group inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-600/25"
          >
            <span>View Detailed Case Studies</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;