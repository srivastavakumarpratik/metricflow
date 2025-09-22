import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ValueProposition />
              <HowItWorks />
              <CaseStudies />
              <Testimonials />
              <Stats />
              <Pricing />
              <CTA />
            </main>
          } />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;