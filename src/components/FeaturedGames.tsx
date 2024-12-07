import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { featuredGames } from '../data/games';

export default function FeaturedGames() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => 
        current === featuredGames.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === featuredGames.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? featuredGames.length - 1 : current - 1
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Tendances :</h2>
      <div className="relative">
        {/* Main Featured Game */}
        <a 
          href={featuredGames[currentIndex].storeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative h-[400px] rounded-lg overflow-hidden group"
        >
          <img
            src={featuredGames[currentIndex].imageUrl}
            alt={featuredGames[currentIndex].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              {featuredGames[currentIndex].title}
            </h3>
            <button className="bg-violet-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-violet-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50">
              <Download className="h-5 w-5" />
              Télécharger gratuitement
            </button>
          </div>
        </a>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-violet-500/50 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-violet-500/50 transition-all duration-300 transform hover:scale-110"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Thumbnails */}
        <div className="mt-4 grid grid-cols-5 gap-4">
          {featuredGames.map((game, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-violet-500 transform scale-105' 
                  : 'opacity-50 hover:opacity-75 hover:transform hover:scale-105'
              }`}
            >
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-20 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}