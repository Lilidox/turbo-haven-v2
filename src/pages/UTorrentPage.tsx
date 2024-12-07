import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UTorrentPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour
        </Link>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-violet-500/10 p-4 rounded-lg">
              <Download className="h-12 w-12 text-violet-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">uTorrent</h1>
              <p className="text-gray-400">Guide d'installation et d'utilisation</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Installation de uTorrent</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Téléchargez uTorrent depuis le lien ci-dessous</li>
                <li>Lancez le fichier d'installation</li>
                <li>Choisissez le type d'installation (Standard recommandé)</li>
                <li>Sélectionnez le dossier de destination</li>
                <li>Terminez l'installation</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Configuration recommandée</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Ouvrez uTorrent et allez dans les Préférences</li>
                <li>Configurez le dossier de téléchargement par défaut</li>
                <li>Ajustez la vitesse de téléchargement/envoi</li>
                <li>Activez le chiffrement si nécessaire</li>
              </ul>
            </section>

            <div className="mt-8">
              <a
                href="https://www.utorrent.com/downloads/complete/track/stable/os/win"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition-colors"
              >
                <Download className="h-5 w-5" />
                Télécharger uTorrent
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}