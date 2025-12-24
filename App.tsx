import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ChefOS } from './pages/ChefOS';
import { SiteOS } from './pages/SiteOS';
import { Aegis } from './pages/Aegis';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Hub Page with Layout */}
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
        
        {/* Products are almost treated like separate microsites visually */}
        <Route path="/chefos" element={<ChefOS />} />
        <Route path="/siteos" element={<SiteOS />} />
        <Route path="/logistics" element={<Aegis />} />
        
        {/* Placeholder for Blog */}
        <Route path="/blog" element={
          <>
            <Header />
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
               <div className="text-center">
                  <h1 className="text-4xl font-bold text-solent mb-4">Island Insights</h1>
                  <p className="text-gray-500">Coming Soon. Read about local AI adoption.</p>
               </div>
            </div>
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;