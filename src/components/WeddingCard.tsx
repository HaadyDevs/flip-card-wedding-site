import React, { useState, useRef, useCallback } from "react";

const WeddingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging.current) return;

      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX.current;

      // Minimum swipe distance to trigger flip
      if (Math.abs(deltaX) > 50) {
        handleFlip();
      }

      isDragging.current = false;
    },
    [handleFlip]
  );

  // Mouse events for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;

      const endX = e.clientX;
      const deltaX = endX - startX.current;

      // Minimum swipe distance to trigger flip
      if (Math.abs(deltaX) > 50) {
        handleFlip();
      }

      isDragging.current = false;
    },
    [handleFlip]
  );

  // Prevent context menu on long press
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 p-4 md:p-8">
      <div className="mb-4 md:mb-8 text-center">
        <h1 className="text-2xl md:text-4xl font-serif text-gray-800 mb-2">
          Wedding Card
        </h1>
      </div>

      <div className="perspective-1000 w-full max-w-xs md:max-w-sm lg:max-w-md relative">
        {/* Curving Arrow with "flip me" text */}
        <div className="absolute -top-6 -right-8 z-20 flex items-center gap-2">
          <span className="text-rose-600 font-serif text-sm italic">
            flip me
          </span>
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            className="text-rose-600"
          >
            <path
              d="M5 5 Q20 -5 35 5 L30 0 M35 5 L30 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div
          ref={cardRef}
          className={`relative preserve-3d transition-transform duration-700 cursor-grab active:cursor-grabbing w-full ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            aspectRatio: "3/7",
            minHeight: "500px",
            maxHeight: "80vh",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onContextMenu={handleContextMenu}
          onClick={handleFlip}
        >
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

      {/* Simple instruction text */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400 font-light">
          Swipe left or right, or click to flip the card ✨
        </p>
      </div>
    </div>
  );
};

export default WeddingCard;
