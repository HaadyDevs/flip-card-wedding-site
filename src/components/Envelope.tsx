
import React, { useState } from 'react';
import WeddingCard from './WeddingCard';

const Envelope = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpened) {
      setIsOpened(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 p-4 md:p-8 relative overflow-hidden">
      {!isOpened && (
        <div className="mb-4 md:mb-8 text-center">
          <h1 className="text-2xl md:text-4xl font-serif text-gray-800 mb-2">
            You're Invited
          </h1>
          <p className="text-sm text-gray-600 italic">Click to open</p>
        </div>
      )}

      {/* Envelope Container */}
      <div 
        className={`relative transition-all duration-1000 ${
          isOpened ? 'scale-110 -translate-y-8' : 'cursor-pointer hover:scale-105'
        }`}
        onClick={handleEnvelopeClick}
      >
        {/* Envelope Base */}
        <div 
          className={`relative w-80 h-56 bg-gradient-to-br from-cream-100 to-cream-200 shadow-lg transition-all duration-1000 ${
            isOpened ? 'opacity-90' : ''
          }`}
          style={{
            clipPath: 'polygon(0 25%, 50% 60%, 100% 25%, 100% 100%, 0 100%)'
          }}
        />

        {/* Envelope Flap */}
        <div 
          className={`absolute top-0 left-0 w-80 h-32 bg-gradient-to-br from-cream-200 to-cream-300 shadow-md origin-bottom transition-all duration-1000 ${
            isOpened ? '-rotate-180 translate-y-4' : ''
          }`}
          style={{
            clipPath: 'polygon(0 0, 50% 75%, 100% 0)'
          }}
        />

        {/* Envelope Seal */}
        <div 
          className={`absolute top-8 left-1/2 transform -translate-x-1/2 ${
            isOpened ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          } transition-all duration-500`}
        >
          <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-md">
            <div className="w-8 h-8 bg-rose-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-serif">♥</span>
            </div>
          </div>
        </div>

        {/* Card coming out of envelope */}
        <div 
          className={`absolute transition-all duration-1500 ease-out ${
            isOpened 
              ? 'top-[-200px] left-1/2 transform -translate-x-1/2 opacity-100 scale-100' 
              : 'top-4 left-1/2 transform -translate-x-1/2 opacity-0 scale-50'
          }`}
        >
          {isOpened && (
            <div className="w-64 h-96 bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200">
              <img
                src="/lovable-uploads/c0ecc565-9a87-49af-a90d-6b0e921065c8.png"
                alt="Wedding Card Preview"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </div>

      {/* Full Wedding Card (appears after envelope animation) */}
      {isOpened && (
        <div 
          className={`transition-all duration-1000 delay-1000 ${
            isOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mt-8">
            <WeddingCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Envelope;
