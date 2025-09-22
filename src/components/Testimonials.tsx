import React, { useEffect, useState, useRef } from 'react';
import { Star, ArrowUp, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      result: "+$17k/month",
      quote: "MetricFlow found that our mobile checkout was broken on iOS. The fix was simple but we never would have found it ourselves. Revenue jumped 53% in 3 weeks.",
      company: "EcoClean Supply",
      author: "Sarah Chen",
      title: "Founder",
      industry: "Home & Garden • $520k/mo",
      color: "blue"
    },
    {
      result: "+267% Conversion",
      quote: "Our conversion rate tripled after implementing their product page recommendations. The changes were obvious in hindsight, but we needed their expertise to see them.",
      company: "FashionWave", 
      author: "Marcus Rodriguez",
      title: "CEO",
      industry: "Apparel • 4.4% conversion rate",
      color: "green"
    },
    {
      result: "+110% Revenue",
      quote: "They showed us we were targeting the wrong customers with our ads. Same budget, double the revenue. Best investment we've made in our marketing.",
      company: "TechGear Pro",
      author: "Jennifer Park", 
      title: "Marketing Director",
      industry: "Electronics • $1.24M/mo",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600", 
      purple: "text-purple-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="results" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from business owners who've seen measurable revenue growth
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 delay-${200 + index * 100} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="pt-6">
                  <div className={`text-3xl font-bold mb-4 ${getColorClasses(testimonial.color)} flex items-center`}>
                    <ArrowUp className="h-6 w-6 mr-2" />
                    {testimonial.result}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-900 font-bold mb-1">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">
                          {testimonial.title}, {testimonial.company}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.industry}
                        </p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;