import React from 'react';
import { HeartHandshake, Download, MessageCircle, Heart } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-800/80 backdrop-blur-sm text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              La plateforme de téléchargement de jeux la plus avancée, créée pour vous offrir une expérience de jeu gratuite et sans limites.
            </p>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Download className="h-5 w-5 text-violet-400" />
              Téléchargement
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Jeux payants maintenant gratuits</li>
              <li>Téléchargement rapide</li>
              <li>Installation simple</li>
              <li>Mise à jour automatique</li>
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-violet-400" />
              Communauté
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Support Discord 24/7</li>
              <li>Proposer un nouveau jeu</li>
              <li>Signaler un problème</li>
              <li>Rejoindre la communauté</li>
            </ul>
          </div>

          {/* Credits Section */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-violet-400" />
              Créateurs
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-violet-400" />
                Site Web par Lilidox
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2024 Turbo Haven. Tous droits réservés.</p>
            <a
              href="https://discord.gg/8s8SHvzuc9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-violet-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Rejoindre le Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}