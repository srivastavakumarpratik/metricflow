import React from 'react';
import { BarChart3, Mail, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Results", href: "#results" },
        { name: "Pricing", href: "#pricing" }
      ]
    },
    {
      title: "Support", 
      links: [
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                MetricFlow
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Actionable business insights for Shopify stores. We turn your data into 
              revenue-growing actions, not just pretty charts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-slate-100 font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 mt-12 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 MetricFlow. All rights reserved. Stop guessing, start growing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;