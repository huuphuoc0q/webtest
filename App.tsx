
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Features from './components/Features';
import Technology from './components/Technology';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Features />
        <Technology />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;
