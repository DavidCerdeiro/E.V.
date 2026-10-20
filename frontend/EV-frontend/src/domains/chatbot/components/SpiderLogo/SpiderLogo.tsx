import React from 'react';

export function SpiderLogo() {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-20">
      <div 
        className="bg-symbiote-red" 
        style={{
          width: '120px',
          height: '120px',
          maskImage: 'url(/spider.svg)',
          WebkitMaskImage: 'url(/spider.svg)',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
        aria-label="Emblema de Spider-Man"
        role="img"
      />
    </div>
  );
}