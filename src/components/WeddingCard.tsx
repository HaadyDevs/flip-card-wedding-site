import React, { useState, useRef, useCallback, useEffect } from "react";

const WeddingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!isMobile) return;
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  }, [isMobile]);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!isMobile || !isDragging.current) return;

      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX.current;

      // Minimum swipe distance to trigger flip
      if (Math.abs(deltaX) > 50) {
        handleFlip();
      }

      isDragging.current = false;
    },
    [handleFlip, isMobile]
  );

  // Click event for desktop
  const handleClick = useCallback(() => {
    if (!isMobile) {
      handleFlip();
    }
  }, [handleFlip, isMobile]);

  // Prevent context menu on long press
  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
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
          className={`relative preserve-3d transition-transform duration-700 w-full ${
            isFlipped ? "rotate-y-180" : ""
          } ${isMobile ? "cursor-default" : "cursor-pointer"}`}
          style={{
            aspectRatio: "3/7",
            minHeight: "500px",
            maxHeight: "80vh",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
          onContextMenu={handleContextMenu}
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

      {/* Updated instruction text */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400 font-light">
          {isMobile ? "Swipe left or right to flip the card ✨" : "Click to flip the card ✨"}
        </p>
      </div>
    </div>
  );
};

export default WeddingCard;
