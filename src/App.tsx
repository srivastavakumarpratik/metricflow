import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Insights />
        <Testimonials />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;