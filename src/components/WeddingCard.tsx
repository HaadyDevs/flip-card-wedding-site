
import React, { useState } from 'react';
import { Heart, RotateCcw } from 'lucide-react';

const WeddingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 p-4 md:p-8">
      <div className="mb-4 md:mb-8 text-center">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-800 mb-2">Wedding Card</h1>
      </div>
      
      <div className="perspective-1000 w-full max-w-xs md:max-w-sm lg:max-w-md relative group">
        {/* Enhanced Corner Flip Hint */}
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-br from-rose-100 to-pink-100 backdrop-blur-sm rounded-full p-3 shadow-xl border border-rose-200/50 opacity-70 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 animate-pulse hover:animate-none active:animate-none">
          <RotateCcw className="w-5 h-5 text-rose-700" />
        </div>

        {/* Enhanced Sparkle Effects */}
        <div className="absolute -top-3 -left-3 w-4 h-4 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-70 animate-ping shadow-lg"></div>
        <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-70 animate-ping animation-delay-700 shadow-lg"></div>
        <div className="absolute top-1/4 -left-2 w-2 h-2 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-60 animate-ping animation-delay-1000"></div>

        <div
          className={`relative preserve-3d transition-transform duration-700 cursor-pointer w-full touch-manipulation ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          style={{
            aspectRatio: '3/7',
            minHeight: '500px',
            maxHeight: '80vh'
          }}
        >
          {/* Luxurious Hover/Touch Overlay for Front */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-rose-900/10 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 rounded-lg flex items-center justify-center backface-hidden">
            <div className="bg-gradient-to-br from-white/95 to-rose-50/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-rose-200/30 flex items-center gap-3 text-rose-900 font-serif text-base md:text-lg transform translate-y-6 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-500 hover:scale-105 active:scale-105">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full shadow-inner">
                <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
              </div>
              <span className="font-medium tracking-wide">Touch to reveal</span>
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full shadow-inner animate-spin-slow">
                <RotateCcw className="w-4 h-4 text-rose-600" />
              </div>
            </div>
          </div>

          {/* Luxurious Hover/Touch Overlay for Back */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-rose-900/10 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 rounded-lg flex items-center justify-center rotate-y-180 backface-hidden">
            <div className="bg-gradient-to-br from-white/95 to-rose-50/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-2xl border border-rose-200/30 flex items-center gap-3 text-rose-900 font-serif text-base md:text-lg transform translate-y-6 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-500 hover:scale-105 active:scale-105">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full shadow-inner">
                <Heart className="w-4 h-4 fill-rose-600 text-rose-600" />
              </div>
              <span className="font-medium tracking-wide">Touch to reveal</span>
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full shadow-inner animate-spin-slow">
                <RotateCcw className="w-4 h-4 text-rose-600" />
              </div>
            </div>
          </div>

          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/c0ecc565-9a87-49af-a90d-6b0e921065c8.png" 
              alt="Wedding Card Front"
              className="w-full h-full object-contain select-none"
            />
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/664889b9-5ea8-4c46-b4ee-a13d2c621a66.png" 
              alt="Wedding Card Back"
              className="w-full h-full object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* Elegant instruction text */}
      <div className="mt-8 text-center">
        <p className="text-sm text-rose-400 font-serif italic tracking-wide">
          Touch the card to discover its hidden beauty ✨
        </p>
      </div>
    </div>
  );
};

export default WeddingCard;
