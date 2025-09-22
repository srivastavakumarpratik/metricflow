import React, { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 2.3, suffix: 'M+', label: 'Additional revenue generated', prefix: '$' },
    { value: 47, suffix: '%', label: 'Average revenue increase', prefix: '' },
    { value: 6, suffix: ' weeks', label: 'Average time to see results', prefix: '' },
    { value: 200, suffix: '+', label: 'E-commerce stores analyzed', prefix: '' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = start;
          return newCounters;
        });
      }, 16);
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.prefix}
                {index === 0 ? counters[index].toFixed(1) : Math.floor(counters[index])}
                {stat.suffix}
              </div>
              <p className="text-gray-600 text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;