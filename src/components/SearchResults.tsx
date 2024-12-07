import React from 'react';
import { useSearch } from '../contexts/SearchContext';
import { Download } from 'lucide-react';

export default function SearchResults() {
  const { searchResults, isSearching } = useSearch();

  if (!isSearching) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700/50 max-h-96 overflow-y-auto z-50">
      {searchResults.length > 0 ? (
        <div className="p-2">
          {searchResults.map((game, index) => (
            <a
              key={index}
              href={game.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer group"
            >
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-white font-medium group-hover:text-violet-400 transition-colors">
                  {game.title}
                </h4>
              </div>
              <div className="p-2 bg-violet-500/10 rounded-lg group-hover:bg-violet-500 transition-colors">
                <Download className="h-5 w-5 text-violet-400 group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-400">
          Aucun jeu trouvé pour cette recherche
        </div>
      )}
    </div>
  );
}