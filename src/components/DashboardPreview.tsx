import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Target } from 'lucide-react';

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics = [
    {
      id: 1,
      icon: DollarSign,
      label: "Immediate Action",
      description: "Fix mobile checkout. 34% of mobile users abandon at shipping section. Simplifying by 2 options recovers $2,847/month.",
      value: "$2,847/mo",
      color: "emerald",
      delay: 0
    },
    {
      id: 2,
      icon: TrendingUp,
      label: "Growth Opportunity", 
      description: "Email timing optimization. Your customers open emails 47% more at 2PM Tuesday. Immediate campaigns for 23% revenue boost.",
      value: "+23%",
      color: "blue",
      delay: 200
    },
    {
      id: 3,
      icon: Target,
      label: "Hidden Insight",
      description: "High-value segment found. Customers aged 35-45 years in Seattle purchase $645/session. Replication could impact $18k/month annually.",
      value: "$18k",
      color: "orange",
      delay: 400
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        icon: "text-emerald-400"
      },
      blue: {
        bg: "bg-blue-500/10", 
        border: "border-blue-500/30",
        text: "text-blue-400",
        icon: "text-blue-400"
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/30", 
        text: "text-orange-400",
        icon: "text-orange-400"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative">
      <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-t-2xl"></div>
        
        <h3 className="text-xl font-bold text-slate-100 mb-6">
          This Week's Revenue Opportunities
        </h3>

        <div className="space-y-6">
          {metrics.map((metric) => {
            const colors = getColorClasses(metric.color);
            const Icon = metric.icon;
            
            return (
              <div
                key={metric.id}
                className={`transform transition-all duration-500 delay-${metric.delay} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                } ${colors.bg} ${colors.border} border rounded-xl p-4 hover:scale-102 hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className={`h-4 w-4 ${colors.icon}`} />
                      <span className="text-sm font-medium text-slate-300">
                        {metric.label}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                  <div className={`text-2xl font-bold ${colors.text} ml-4 flex-shrink-0`}>
                    {metric.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Updated 2 minutes ago</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-medium">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;