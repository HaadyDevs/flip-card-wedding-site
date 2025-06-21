
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
        {/* Corner Flip Hint */}
        <div className="absolute top-3 right-3 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-60 group-hover:opacity-100 transition-all duration-300 animate-pulse hover:animate-none">
          <RotateCcw className="w-4 h-4 text-rose-600" />
        </div>

        {/* Sparkle Effects */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-rose-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-pink-300 rounded-full opacity-60 animate-ping animation-delay-500"></div>

        <div
          className={`relative preserve-3d transition-transform duration-700 cursor-pointer w-full ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          style={{
            aspectRatio: '3/7',
            minHeight: '500px',
            maxHeight: '80vh'
          }}
        >
          {/* Hover Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center backface-hidden">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-rose-800 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Heart className="w-4 h-4 fill-rose-200" />
              <span>Tap to flip</span>
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>

          {/* Back Side Hover Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center rotate-y-180 backface-hidden">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-rose-800 font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Heart className="w-4 h-4 fill-rose-200" />
              <span>Tap to flip</span>
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>

          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/c0ecc565-9a87-49af-a90d-6b0e921065c8.png" 
              alt="Wedding Card Front"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/664889b9-5ea8-4c46-b4ee-a13d2c621a66.png" 
              alt="Wedding Card Back"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Subtle instruction text */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400 font-light">
          Hover or tap the card to reveal the magic ✨
        </p>
      </div>
    </div>
  );
};

export default WeddingCard;
