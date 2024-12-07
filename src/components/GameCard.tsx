import React from 'react';
import { Download, Archive, Download as DownloadIcon } from 'lucide-react';

interface GameCardProps {
  title: string;
  imageUrl: string;
  storeUrl: string;
}

export default function GameCard({ title, imageUrl, storeUrl }: GameCardProps) {
  const needsWinrar = storeUrl.includes('clictune');
  const needsUtorrent = storeUrl.toLowerCase().endsWith('.torrent');

  return (
    <div className="relative group">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-violet-500/20">
        <div className="relative">
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
          {needsWinrar && (
            <div className="absolute top-2 right-2 bg-red-500 p-2 rounded-lg shadow-lg transform rotate-12">
              <Archive className="h-5 w-5 text-white" />
            </div>
          )}
          {needsUtorrent && (
            <div className="absolute top-2 right-2 bg-green-500 p-2 rounded-lg shadow-lg transform rotate-12">
              <DownloadIcon className="h-5 w-5 text-white" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-white font-medium truncate mb-4 group-hover:text-violet-400 transition-colors">{title}</h3>
          <a
            href={storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-violet-500 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-violet-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-violet-500/50"
          >
            <Download className="h-5 w-5" />
            Cliquez ici pour télécharger
          </a>
        </div>
      </div>
    </div>
  );
}