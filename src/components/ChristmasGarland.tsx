import React from 'react';

export default function ChristmasGarland() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
  const cornerLights = 8; // Number of lights at each corner
  const sideLights = 15; // Number of lights on each side

  const createLights = (count: number, position: 'top' | 'right' | 'bottom' | 'left' | 'corner-tl' | 'corner-tr' | 'corner-br' | 'corner-bl') => {
    return Array.from({ length: count }).map((_, i) => {
      const color = colors[i % colors.length];
      const delay = `${(i * 0.1).toFixed(1)}s`;
      let styles: React.CSSProperties = {
        position: 'absolute',
        width: '10px',
        height: '10px',
        backgroundColor: color,
        borderRadius: '50%',
        animation: 'twinkle 1s ease-in-out infinite',
        animationDelay: delay,
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
      };

      switch (position) {
        case 'top':
          styles = {
            ...styles,
            top: '-5px',
            left: `${(i / (count - 1)) * 100}%`,
          };
          break;
        case 'right':
          styles = {
            ...styles,
            top: `${(i / (count - 1)) * 100}%`,
            right: '-5px',
          };
          break;
        case 'bottom':
          styles = {
            ...styles,
            bottom: '-5px',
            left: `${(i / (count - 1)) * 100}%`,
          };
          break;
        case 'left':
          styles = {
            ...styles,
            top: `${(i / (count - 1)) * 100}%`,
            left: '-5px',
          };
          break;
        case 'corner-tl':
          styles = {
            ...styles,
            top: `${-5 + (i * 2)}px`,
            left: `${-5 + (i * 2)}px`,
            transform: 'rotate(45deg)',
          };
          break;
        case 'corner-tr':
          styles = {
            ...styles,
            top: `${-5 + (i * 2)}px`,
            right: `${-5 + (i * 2)}px`,
            transform: 'rotate(-45deg)',
          };
          break;
        case 'corner-br':
          styles = {
            ...styles,
            bottom: `${-5 + (i * 2)}px`,
            right: `${-5 + (i * 2)}px`,
            transform: 'rotate(45deg)',
          };
          break;
        case 'corner-bl':
          styles = {
            ...styles,
            bottom: `${-5 + (i * 2)}px`,
            left: `${-5 + (i * 2)}px`,
            transform: 'rotate(-45deg)',
          };
          break;
      }

      return <div key={`${position}-${i}`} style={styles} />;
    });
  };

  return (
    <div className="absolute inset-0 -m-4 pointer-events-none">
      {/* Garland base */}
      <div className="absolute inset-0 border-4 border-green-800/30 rounded-xl" />
      
      {/* Pine needles */}
      <div className="absolute inset-0 border-8 border-green-700/20 rounded-xl" 
           style={{ 
             backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(34, 197, 94, 0.1) 10px, rgba(34, 197, 94, 0.1) 20px)'
           }} 
      />

      {/* Lights */}
      {createLights(sideLights, 'top')}
      {createLights(sideLights, 'right')}
      {createLights(sideLights, 'bottom')}
      {createLights(sideLights, 'left')}
      
      {/* Corner lights */}
      {createLights(cornerLights, 'corner-tl')}
      {createLights(cornerLights, 'corner-tr')}
      {createLights(cornerLights, 'corner-br')}
      {createLights(cornerLights, 'corner-bl')}

      {/* Decorative elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`pine-${i}`}
            className="absolute w-6 h-6"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.2,
              backgroundImage: `radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)`
            }}
          />
        ))}
      </div>
    </div>
  );
}