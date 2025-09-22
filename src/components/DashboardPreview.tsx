import React, { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Target, ArrowUp } from 'lucide-react';

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
      label: "Revenue Opportunity",
      description: "Mobile checkout optimization could recover $4,200/month from abandoned carts",
      value: "$4.2k",
      change: "+34%",
      color: "blue",
      delay: 0
    },
    {
      id: 2,
      icon: TrendingUp,
      label: "Conversion Boost", 
      description: "Product page improvements show 23% higher conversion in A/B tests",
      value: "2.8%",
      change: "+23%",
      color: "green",
      delay: 200
    },
    {
      id: 3,
      icon: Target,
      label: "Customer Segment",
      description: "High-value customers (35-45, Seattle) have 3x higher lifetime value",
      value: "$645",
      change: "3x LTV",
      color: "purple",
      delay: 400
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "text-blue-600",
        change: "text-blue-600"
      },
      green: {
        bg: "bg-green-50", 
        border: "border-green-200",
        text: "text-green-600",
        icon: "text-green-600",
        change: "text-green-600"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200", 
        text: "text-purple-600",
        icon: "text-purple-600",
        change: "text-purple-600"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="relative">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-500">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-t-2xl"></div>
        
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Revenue Growth Opportunities
          </h3>
          <div className="flex items-center space-x-1 text-sm text-green-600">
            <ArrowUp className="h-4 w-4" />
            <span className="font-semibold">+$7.2k/mo potential</span>
          </div>
        </div>

        <div className="space-y-4">
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
                      <span className="text-sm font-medium text-gray-700">
                        {metric.label}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white ${colors.change}`}>
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
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

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Last updated: 2 minutes ago</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium">Live Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;