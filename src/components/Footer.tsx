import React from 'react';
import { BarChart3, Mail, Twitter, Linkedin, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works", isExternal: false },
        { name: "Case Studies", href: "/case-studies", isExternal: false },
        { name: "Pricing", href: "#pricing", isExternal: false }
      ]
    },
    {
      title: "Support", 
      links: [
        { name: "Contact Us", href: "#", isExternal: true },
        { name: "Privacy Policy", href: "#", isExternal: true },
        { name: "Terms of Service", href: "#", isExternal: true }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#", isExternal: true },
        { name: "Blog", href: "#", isExternal: true },
        { name: "Careers", href: "#", isExternal: true }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                MetricFlow
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Expert e-commerce analytics that identify revenue opportunities and provide 
              actionable growth strategies for online businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-900 font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.isExternal ? (
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 MetricFlow. All rights reserved. Turn your data into revenue growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;