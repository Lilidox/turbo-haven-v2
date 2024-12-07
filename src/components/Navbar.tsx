import React from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavMenu from './NavMenu';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="w-1/4">
          <Logo />
        </div>
        
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>
        
        <div className="w-1/4 flex items-center justify-end">
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}