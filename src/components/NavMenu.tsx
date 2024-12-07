import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
      >
        <div className="space-y-1">
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-white hover:bg-violet-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}