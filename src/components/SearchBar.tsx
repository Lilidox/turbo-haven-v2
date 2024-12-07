import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import SearchResults from './SearchResults';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher un jeu..."
          className="bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg pl-10 w-[400px] focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-300"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      <SearchResults />
    </div>
  );
}