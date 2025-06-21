
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
      
      <div className="perspective-1000 w-full max-w-sm md:max-w-md lg:max-w-lg">
        <div
          className={`relative preserve-3d transition-transform duration-700 cursor-pointer w-full ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          style={{
            aspectRatio: '3/7',
            minHeight: '400px',
            maxHeight: '70vh'
          }}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-white shadow-2xl border border-gray-200">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center text-gray-500">
                <div className="text-4xl md:text-6xl mb-4">📷</div>
                <p className="text-sm md:text-base font-medium">Front Image Placeholder</p>
                <p className="text-xs md:text-sm mt-2 opacity-70">Replace with your wedding photo</p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white shadow-2xl border border-gray-200">
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center text-gray-500">
                <div className="text-4xl md:text-6xl mb-4">📷</div>
                <p className="text-sm md:text-base font-medium">Back Image Placeholder</p>
                <p className="text-xs md:text-sm mt-2 opacity-70">Replace with your wedding details</p>
              </div>
            </div>
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
