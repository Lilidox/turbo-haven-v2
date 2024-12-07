import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqItems } from '../data/faq';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-700/50 last:border-none">
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-gray-700/20 transition-colors rounded-lg"
      >
        <h3 className="text-lg font-medium text-white text-left">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-violet-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-violet-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-300 whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center text-violet-400 hover:text-violet-300 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour
        </Link>
        
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-700/50">
            <h1 className="text-3xl font-bold text-white">FAQ</h1>
            <p className="text-gray-400 mt-2">Trouvez les réponses à vos questions les plus fréquentes</p>
          </div>
          
          <div className="divide-y divide-gray-700/50">
            {faqItems.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}