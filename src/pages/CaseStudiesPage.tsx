import React, { useEffect, useState } from 'react';
import { ArrowLeft, TrendingUp, Users, Clock, Target, DollarSign, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const detailedCaseStudies = [
    {
      id: 1,
      company: "EcoClean Supply",
      industry: "Home & Garden",
      logo: "🌱",
      overview: {
        revenue: "$340k/mo → $520k/mo",
        improvement: "+53% Revenue Growth",
        timeframe: "3 weeks to full implementation",
        investment: "2 hours of development time"
      },
      challenge: {
        title: "Mobile Cart Abandonment Crisis",
        description: "EcoClean Supply was losing 73% of mobile customers at checkout, significantly higher than their 45% desktop abandonment rate. Despite strong traffic growth, revenue was stagnating.",
        metrics: [
          "73% mobile cart abandonment",
          "45% desktop cart abandonment", 
          "Revenue plateau despite 40% traffic increase",
          "Customer complaints about checkout complexity"
        ]
      },
      analysis: {
        title: "Our Investigation Process",
        findings: [
          "Heatmap analysis revealed users struggling with shipping calculator popup",
          "Mobile checkout required 7 steps vs 3 on desktop",
          "iOS users had 15% higher abandonment than Android",
          "Shipping costs displayed too late in the process"
        ]
      },
      solution: {
        title: "Strategic Implementation",
        actions: [
          "Removed shipping calculator popup from mobile checkout",
          "Simplified mobile checkout to 3 steps matching desktop",
          "Moved shipping costs to product page for transparency",
          "Added progress indicator to reduce perceived complexity"
        ]
      },
      results: {
        title: "Measurable Impact",
        metrics: [
          { label: "Mobile Conversion Rate", before: "1.8%", after: "4.2%", change: "+133%" },
          { label: "Monthly Revenue", before: "$340k", after: "$520k", change: "+$180k" },
          { label: "Cart Abandonment", before: "73%", after: "41%", change: "-32%" },
          { label: "Customer Satisfaction", before: "3.2/5", after: "4.6/5", change: "+44%" }
        ]
      },
      testimonial: {
        quote: "MetricFlow found the exact problem that was costing us $17k every month. The fix was simple but we never would have identified it ourselves. Our mobile revenue doubled in 3 weeks.",
        author: "Sarah Chen",
        title: "Founder, EcoClean Supply"
      }
    },
    {
      id: 2,
      company: "FashionWave",
      industry: "Apparel & Fashion",
      logo: "👗",
      overview: {
        revenue: "1.2% → 4.4% conversion rate",
        improvement: "+267% Conversion Rate",
        timeframe: "2 weeks to see results",
        investment: "4 hours of content updates"
      },
      challenge: {
        title: "Low Conversion Across All Channels",
        description: "FashionWave had strong brand awareness and decent traffic, but their 1.2% conversion rate was well below industry standards. Customers were viewing products but not purchasing.",
        metrics: [
          "1.2% overall conversion rate",
          "High bounce rate on product pages (68%)",
          "Low average order value ($45)",
          "Minimal repeat purchases (12%)"
        ]
      },
      analysis: {
        title: "Conversion Optimization Audit",
        findings: [
          "Product pages lacked social proof and urgency",
          "No clear value proposition on product pages",
          "Sizing information was buried in tabs",
          "No customer reviews visible above the fold"
        ]
      },
      solution: {
        title: "Product Page Transformation",
        actions: [
          "Added customer reviews and ratings prominently",
          "Implemented urgency messaging (stock levels, limited time offers)",
          "Created clear size guides with fit recommendations",
          "Added 'Recently viewed by X customers' social proof"
        ]
      },
      results: {
        title: "Dramatic Improvement",
        metrics: [
          { label: "Conversion Rate", before: "1.2%", after: "4.4%", change: "+267%" },
          { label: "Average Order Value", before: "$45", after: "$78", change: "+73%" },
          { label: "Product Page Bounce Rate", before: "68%", after: "34%", change: "-50%" },
          { label: "Monthly Revenue", before: "$89k", after: "$312k", change: "+250%" }
        ]
      },
      testimonial: {
        quote: "We knew our conversion rate was low, but we didn't know why. MetricFlow's analysis showed us exactly what was missing from our product pages. The changes were simple but the impact was incredible.",
        author: "Marcus Rodriguez",
        title: "CEO, FashionWave"
      }
    },
    {
      id: 3,
      company: "TechGear Pro",
      industry: "Electronics & Gadgets",
      logo: "⚡",
      overview: {
        revenue: "$590k/mo → $1.24M/mo",
        improvement: "+110% Revenue Growth",
        timeframe: "4 weeks to full optimization",
        investment: "Budget reallocation, no additional spend"
      },
      challenge: {
        title: "Inefficient Ad Spend & Low ROAS",
        description: "TechGear Pro was spending $45k/month on ads but seeing diminishing returns. Their ROAS had dropped from 4.2x to 1.8x over 6 months, and they couldn't identify which campaigns were profitable.",
        metrics: [
          "1.8x ROAS (down from 4.2x)",
          "$45k monthly ad spend",
          "Customer acquisition cost increasing 40%",
          "Unclear attribution across channels"
        ]
      },
      analysis: {
        title: "Marketing Attribution Deep Dive",
        findings: [
          "60% of ad spend going to low-value customer segments",
          "High-value customers (35-45, tech professionals) underserved",
          "Google Ads targeting too broad, wasting budget on irrelevant clicks",
          "Facebook campaigns not optimized for lifetime value"
        ]
      },
      solution: {
        title: "Strategic Budget Reallocation",
        actions: [
          "Reallocated $27k/month to high-value customer segments",
          "Created lookalike audiences based on top 10% customers",
          "Implemented negative keywords to reduce wasted Google Ads spend",
          "Shifted budget from awareness to conversion campaigns"
        ]
      },
      results: {
        title: "Exceptional ROI",
        metrics: [
          { label: "ROAS", before: "1.8x", after: "5.2x", change: "+189%" },
          { label: "Monthly Revenue", before: "$590k", after: "$1.24M", change: "+110%" },
          { label: "Customer Acquisition Cost", before: "$89", after: "$34", change: "-62%" },
          { label: "Lifetime Value", before: "$245", after: "$420", change: "+71%" }
        ]
      },
      testimonial: {
        quote: "MetricFlow's analysis saved our advertising budget. We were throwing money at the wrong audiences. Now we're spending the same amount but generating double the revenue. It's like having a crystal ball for marketing.",
        author: "Jennifer Park",
        title: "Marketing Director, TechGear Pro"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Detailed Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Deep dive into how we helped these e-commerce businesses identify revenue bottlenecks 
              and implement solutions that delivered measurable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {detailedCaseStudies.map((study, index) => (
          <div key={study.id} className={`mb-20 transform transition-all duration-1000 delay-${index * 200} ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Company Header */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{study.logo}</div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{study.company}</h2>
                  <p className="text-gray-600">{study.industry}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{study.overview.improvement}</div>
                  <p className="text-sm text-gray-600">Growth Achieved</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">{study.overview.revenue}</div>
                  <p className="text-sm text-gray-600">Revenue Impact</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">{study.overview.timeframe}</div>
                  <p className="text-sm text-gray-600">Time to Results</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">{study.overview.investment}</div>
                  <p className="text-sm text-gray-600">Implementation</p>
                </div>
              </div>
            </div>

            {/* Challenge */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  {study.challenge.title}
                </h3>
                <p className="text-gray-700 mb-4">{study.challenge.description}</p>
                <ul className="space-y-2">
                  {study.challenge.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  {study.analysis.title}
                </h3>
                <ul className="space-y-3">
                  {study.analysis.findings.map((finding, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution & Results */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {study.solution.title}
                </h3>
                <ul className="space-y-3">
                  {study.solution.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  {study.results.title}
                </h3>
                <div className="space-y-3">
                  {study.results.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">{metric.before} → {metric.after}</div>
                        <div className="text-sm font-bold text-purple-600">{metric.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl text-gray-400 mb-4">"</div>
                <p className="text-lg text-gray-700 italic mb-6 max-w-4xl mx-auto">
                  {study.testimonial.quote}
                </p>
                <div>
                  <div className="font-bold text-gray-900">{study.testimonial.author}</div>
                  <div className="text-gray-600">{study.testimonial.title}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free analysis call to discover what revenue opportunities we can find in your store.
          </p>
          <button 
            onClick={() => window.open('https://calendly.com/srivastavakumarpratik/30min', '_blank')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105"
          >
            Book Your Free Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;