import React from 'react';
import { Archive, Download, MessageCircle, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ToolsSection() {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/winrar" className="group">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/80 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
              <Gift className="h-16 w-16 text-red-500/20 animate-float" />
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-violet-500/10 p-3 rounded-lg group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Archive className="h-8 w-8 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors">WinRAR</h3>
                <p className="text-gray-400 text-sm">Gestionnaire d'archives</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/utorrent" className="group">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/80 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
              <Gift className="h-16 w-16 text-green-500/20 animate-float animation-delay-2000" />
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-violet-500/10 p-3 rounded-lg group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <Download className="h-8 w-8 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors">uTorrent</h3>
                <p className="text-gray-400 text-sm">Client BitTorrent</p>
              </div>
            </div>
          </div>
        </Link>

        <a href="https://discord.gg/8s8SHvzuc9" target="_blank" rel="noopener noreferrer" className="group">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 hover:bg-gray-700/80 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
              <Gift className="h-16 w-16 text-blue-500/20 animate-float animation-delay-4000" />
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-violet-500/10 p-3 rounded-lg group-hover:bg-violet-500/20 transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="h-8 w-8 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors">Discord</h3>
                <p className="text-gray-400 text-sm">Rejoignez notre communauté</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}