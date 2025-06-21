
import React, { useState } from 'react';

const WeddingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 p-4 md:p-8">
      <div className="mb-4 md:mb-8 text-center">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-800 mb-2">Wedding Card</h1>
        <p className="text-sm md:text-base text-gray-600">Click the card to flip between sides</p>
      </div>
      
      <div className="perspective-1000 w-full max-w-xs md:max-w-sm lg:max-w-md">
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
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-white shadow-2xl border border-gray-200">
            <img 
              src="/lovable-uploads/c0ecc565-9a87-49af-a90d-6b0e921065c8.png" 
              alt="Wedding Card Front"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-2xl border border-gray-200">
            <img 
              src="/lovable-uploads/664889b9-5ea8-4c46-b4ee-a13d2c621a66.png" 
              alt="Wedding Card Back"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-8 text-center">
        <p className="text-xs md:text-sm text-gray-500 mb-2">
          Currently showing: <span className="font-medium">{isFlipped ? 'Back' : 'Front'}</span>
        </p>
        <button
          onClick={handleFlip}
          className="px-4 md:px-6 py-2 bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs md:text-sm font-medium transition-colors duration-200"
        >
          Flip Card
        </button>
      </div>
    </div>
  );
};

export default WeddingCard;
