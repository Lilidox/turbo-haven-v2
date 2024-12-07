import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ToolsSection from './components/ToolsSection';
import FeaturedGames from './components/FeaturedGames';
import GameList from './components/GameList';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';
import WinrarPage from './pages/WinrarPage';
import UTorrentPage from './pages/UTorrentPage';
import FAQPage from './pages/FAQPage';
import AnimatedBackground from './components/AnimatedBackground';
import ChristmasSnow from './components/ChristmasSnow';
import ChristmasDecorations from './components/ChristmasDecorations';
import { SearchProvider } from './contexts/SearchContext';

export default function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="min-h-screen bg-gray-900/50 relative overflow-hidden">
          <AnimatedBackground />
          <ChristmasSnow />
          <ChristmasDecorations />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="relative">
                  <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold christmas-text inline-block px-8 py-2">
                      Joyeux Noël sur Turbo Haven ! 🎄
                    </h1>
                  </div>
                  <ToolsSection />
                  <FeaturedGames />
                  <GameList />
                  <SpecialOffer />
                </div>
              </main>
            } />
            <Route path="/winrar" element={<WinrarPage />} />
            <Route path="/utorrent" element={<UTorrentPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </SearchProvider>
  );
}