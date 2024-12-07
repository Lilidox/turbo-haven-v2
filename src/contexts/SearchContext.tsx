import React, { createContext, useContext, useState, useCallback } from 'react';
import { allGames } from '../data/games';

interface Game {
  title: string;
  imageUrl: string;
}

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: Game[];
  isSearching: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const searchResults = allGames.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    setIsSearching(term.length > 0);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm: handleSearch,
        searchResults,
        isSearching
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}