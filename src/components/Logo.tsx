import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="https://cdn.discordapp.com/attachments/934199082203897856/1312539487347146772/APOCALYPSE_6.png?ex=6754c627&is=675374a7&hm=06fb59d9f7d47fa510d48bcf0ab8f1f2f7fa45239b9080cc7852191f97ce0b2a"
        alt="Turbo Haven Logo"
        className="h-10 w-10 object-contain"
      />
      <span className="text-2xl font-bold text-violet-400">Turbo Haven</span>
    </div>
  );
}