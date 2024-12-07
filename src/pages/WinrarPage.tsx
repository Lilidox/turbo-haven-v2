import React from 'react';
import { Archive, ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WinrarPage() {
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
              <Archive className="h-12 w-12 text-violet-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">WinRAR</h1>
              <p className="text-gray-400">Guide d'installation et d'utilisation</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Comment installer WinRAR ?</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Téléchargez WinRAR depuis le bouton ci-dessous</li>
                <li>Exécutez le fichier d'installation téléchargé</li>
                <li>Suivez les instructions d'installation</li>
                <li>Choisissez votre langue et le dossier d'installation</li>
                <li>Cliquez sur "Installer" pour terminer l'installation</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Utilisation basique</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Clic droit sur un fichier → "Ajouter à l'archive..."</li>
                <li>Double-cliquez sur une archive pour l'ouvrir</li>
                <li>Glissez-déposez les fichiers pour les extraire</li>
              </ul>
            </section>

            <div className="mt-8">
              <a
                href="https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-624fr.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-500 text-white px-6 py-3 rounded-lg hover:bg-violet-600 transition-colors"
              >
                <Download className="h-5 w-5" />
                Télécharger WinRAR
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}