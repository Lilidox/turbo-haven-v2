import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <div className="relative rounded-lg overflow-hidden mb-8 group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://gaming-cdn.com/images/products/17685/616x353/microsoft-flight-simulator-2024-premium-deluxe-edition-pc-xbox-series-x-s-premium-deluxe-edition-xbox-series-x-s-pc-jeu-microsoft-store-cover.jpg?v=1732096355"
          alt="City Skyline"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/90 to-violet-800/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Offre Spéciale</h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-violet-400">
              Microsoft Flight Simulator 2024{' '}
            </h3>
            <p className="text-white/90 text-lg font-bold">-30% de réduction</p>
          </div>
        </div>
        <a
          href="https://www.instant-gaming.com/fr/17684-acheter-microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-jeu-microsoft-store/?igr=STGGEGE"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-violet-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20"
        >
          Voir l'offre
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
