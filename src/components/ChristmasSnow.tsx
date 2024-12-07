import React from 'react';

export default function ChristmasSnow() {
  return (
    <div className="snow-container fixed inset-0 pointer-events-none z-10">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="snow absolute animate-snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random(),
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`
          }}
        />
      ))}
    </div>
  );
}