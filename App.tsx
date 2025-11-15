
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Performance from './components/Performance';
import Trust from './components/Trust';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased font-sans selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Performance />
        <Trust />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
