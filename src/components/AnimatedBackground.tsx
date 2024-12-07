import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-gray-900/60 to-gray-900/80" />
      
      {/* Animated circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-500/30 rounded-full filter blur-3xl animate-blob" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
    </div>
  );
}