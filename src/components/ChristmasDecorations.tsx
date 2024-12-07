import React from 'react';
import { Gift, Star } from 'lucide-react';

export default function ChristmasDecorations() {
  return (
    <>
      {/* Floating decorations */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <Gift
            key={`gift-${i}`}
            className="absolute text-red-500/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 20 + 20}px`,
              height: `${Math.random() * 20 + 20}px`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <Star
            key={`star-${i}`}
            className="absolute text-yellow-500/30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.random() * 15 + 15}px`,
              height: `${Math.random() * 15 + 15}px`
            }}
          />
        ))}
      </div>
    </>
  );
}