import React, { useEffect, useState, useRef } from 'react';
import { ShoppingCart, Target, Mail, Package } from 'lucide-react';

const Insights = () => {
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

  const insights = [
    {
      icon: ShoppingCart,
      tag: "CHECKOUT OPTIMIZATION",
      value: "$3,200/mo",
      description: "Mobile users abandoning at payment step",
      action: "Switch to Shopify's native payment form (4-hour fix)",
      color: "emerald"
    },
    {
      icon: Target,
      tag: "MARKETING EFFICIENCY", 
      value: "+156% ROAS",
      description: "Wrong audience getting 60% of ad spend",
      action: "Reallocate $2,000/month to high-value segment",
      color: "blue"
    },
    {
      icon: Mail,
      tag: "EMAIL OPTIMIZATION",
      value: "+47% Opens",
      description: "Email timing is costing you opens",
      action: "Reschedule automated campaigns (10-minute change)",
      color: "purple"
    },
    {
      icon: Package,
      tag: "INVENTORY STRATEGY",
      value: "$50k",
      description: "Understocking your best sellers",
      action: "Switch to bi-weekly orders, increase safety stock",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        tag: "bg-emerald-500",
        text: "text-emerald-400",
        icon: "text-emerald-400",
        hover: "hover:border-emerald-500/50"
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20", 
        tag: "bg-blue-500",
        text: "text-blue-400",
        icon: "text-blue-400",
        hover: "hover:border-blue-500/50"
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        tag: "bg-purple-500", 
        text: "text-purple-400",
        icon: "text-purple-400",
        hover: "hover:border-purple-500/50"
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        tag: "bg-orange-500",
        text: "text-orange-400", 
        icon: "text-orange-400",
        hover: "hover:border-orange-500/50"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
            Sample Expert Analysis
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real insights from our analytics team - this is what strategic business intelligence looks like
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const colors = getColorClasses(insight.color);
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${200 + index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className={`${colors.bg} ${colors.border} ${colors.hover} border rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 ${colors.bg} rounded-lg`}>
                      <Icon className={`h-6 w-6 ${colors.icon}`} />
                    </div>
                    <span className={`${colors.tag} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide`}>
                      {insight.tag}
                    </span>
                  </div>

                  <div className={`text-3xl font-bold ${colors.text} mb-3`}>
                    {insight.value}
                  </div>

                  <p className="text-slate-300 mb-4">
                    {insight.description}
                  </p>

                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-slate-100 font-semibold text-sm">
                      <span className={colors.text}>Action:</span> {insight.action}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;