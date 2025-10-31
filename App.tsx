
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Introduction from './components/Introduction.tsx';
import Features from './components/Features.tsx';
import Technology from './components/Technology.tsx';
import Team from './components/Team.tsx';
import Roadmap from './components/Roadmap.tsx';
import Footer from './components/Footer.tsx';

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
