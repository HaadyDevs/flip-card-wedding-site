
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
        <div className="mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mb-3 tracking-wide">
            You're Invited
          </h1>
          <p className="text-gray-600 italic text-lg">Click the envelope to open</p>
        </div>
      )}

      {/* Envelope Container */}
      <div className="relative">
        <div 
          className={`relative transition-all duration-1000 ease-in-out transform ${
            isOpened ? 'scale-105' : 'cursor-pointer hover:scale-102 hover:shadow-xl'
          }`}
          onClick={handleEnvelopeClick}
        >
          {/* Envelope Back */}
          <div className="relative w-96 h-64 bg-gradient-to-br from-amber-50 to-amber-100 shadow-xl border border-amber-200 rounded-sm">
            {/* Envelope Front Bottom */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-50 to-cream-100 shadow-lg border border-cream-200 rounded-sm" />
            
            {/* Envelope Front Top Triangle (Flap) */}
            <div 
              className={`absolute top-0 left-0 w-full transition-all duration-1200 ease-out origin-top ${
                isOpened ? 'rotate-180 translate-y-2' : ''
              }`}
            >
              <div 
                className="w-full h-32 bg-gradient-to-br from-cream-100 to-cream-200 border-l border-r border-cream-300 shadow-md"
                style={{
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'
                }}
              />
            </div>

            {/* Wax Seal */}
            <div 
              className={`absolute top-6 left-1/2 transform -translate-x-1/2 transition-all duration-800 ${
                isOpened ? 'opacity-0 scale-0 rotate-45' : 'opacity-100 scale-100'
              }`}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-rose-800 rounded-full shadow-lg border-2 border-rose-700">
                  <div className="absolute inset-2 bg-gradient-to-br from-rose-500 to-rose-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-serif">♥</span>
                  </div>
                </div>
                {/* Wax drips */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-rose-600 rounded-full opacity-60" />
                <div className="absolute -bottom-2 left-3 w-2 h-1 bg-rose-600 rounded-full opacity-40" />
                <div className="absolute -bottom-2 right-3 w-2 h-1 bg-rose-600 rounded-full opacity-40" />
              </div>
            </div>

            {/* Decorative border pattern */}
            <div className="absolute inset-4 border border-dashed border-cream-300 rounded-sm opacity-30" />
          </div>
        </div>

        {/* Card emerging from envelope */}
        <div 
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-2000 ease-out ${
            isOpened 
              ? 'bottom-32 opacity-100 scale-100 rotate-0' 
              : 'bottom-0 opacity-0 scale-90 rotate-3'
          }`}
        >
          {isOpened && (
            <div className="transform hover:scale-105 transition-transform duration-300">
              <WeddingCard />
            </div>
          )}
        </div>
      </div>

      {/* Floating decorative elements */}
      {isOpened && (
        <>
          <div className="absolute top-20 left-20 w-2 h-2 bg-rose-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-32 right-24 w-1 h-1 bg-pink-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-rose-200 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-52 right-20 w-1 h-1 bg-pink-200 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }} />
        </>
      )}
    </div>
  );
};

export default Envelope;
