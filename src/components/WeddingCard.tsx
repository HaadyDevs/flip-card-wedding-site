
import React, { useState } from 'react';
import { ImageUpload } from './ImageUpload';

const WeddingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-serif text-gray-800 mb-2">Wedding Card</h1>
        <p className="text-gray-600">Click the card to flip between sides</p>
      </div>
      
      <div className="perspective-1000">
        <div
          className={`relative preserve-3d transition-transform duration-700 cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
          style={{
            width: '216px', // 3 inches at 72 DPI
            height: '504px', // 7 inches at 72 DPI
          }}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-gradient-to-b from-ivory-100 to-cream-50 rounded-lg shadow-2xl border border-cream-200">
            <div className="w-full h-full p-4 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <ImageUpload
                  onImageUpload={setFrontImage}
                  currentImage={frontImage}
                  side="front"
                />
              </div>
              {!frontImage && (
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Front Side</p>
                  <p className="text-xs mt-1">Click to upload image</p>
                </div>
              )}
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-b from-ivory-100 to-cream-50 rounded-lg shadow-2xl border border-cream-200">
            <div className="w-full h-full p-4 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <ImageUpload
                  onImageUpload={setBackImage}
                  currentImage={backImage}
                  side="back"
                />
              </div>
              {!backImage && (
                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Back Side</p>
                  <p className="text-xs mt-1">Click to upload image</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 mb-2">
          Currently showing: <span className="font-medium">{isFlipped ? 'Back' : 'Front'}</span>
        </p>
        <button
          onClick={handleFlip}
          className="px-6 py-2 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-full transition-colors duration-200 text-sm font-medium"
        >
          Flip Card
        </button>
      </div>
    </div>
  );
};

export default WeddingCard;
