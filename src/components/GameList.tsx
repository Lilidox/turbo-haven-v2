import React, { useState } from 'react';
import GameCard from './GameCard';
import ChristmasGarland from './ChristmasGarland';
import { allGames } from '../data/games';
import { Archive, Download, ChevronDown } from 'lucide-react';

export default function GameList() {
  const INITIAL_DISPLAY = 12;
  const LOAD_MORE_COUNT = 12;
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY);

  const showMoreGames = () => {
    setDisplayCount(prev => Math.min(prev + LOAD_MORE_COUNT, allGames.length));
  };

  const hasMoreGames = displayCount < allGames.length;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-8 mb-6">
        <h2 className="text-2xl font-bold text-white">Tous les jeux disponibles</h2>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1.5 rounded-lg">
              <Archive className="h-4 w-4 text-white" />
            </div>
            <span>Nécessite WinRAR</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-green-500 p-1.5 rounded-lg">
              <Download className="h-4 w-4 text-white" />
            </div>
            <span>Fichier Torrent</span>
          </div>
        </div>
      </div>
      <div className="relative p-4">
        <ChristmasGarland />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allGames.slice(0, displayCount).map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              imageUrl={game.imageUrl}
              storeUrl={game.storeUrl}
            />
          ))}
        </div>
        
        {hasMoreGames && (
          <div className="flex justify-center mt-8">
            <button
              onClick={showMoreGames}
              className="flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50"
            >
              <ChevronDown className="h-5 w-5" />
              Afficher plus de jeux ({allGames.length - displayCount} restants)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}