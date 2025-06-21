
import React, { useRef } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (imageUrl: string) => void;
  currentImage: string | null;
  side: 'front' | 'back';
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  currentImage,
  side
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          onImageUpload(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full h-full relative">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {currentImage ? (
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer hover:opacity-90 transition-opacity duration-200"
          style={{ backgroundImage: `url(${currentImage})` }}
          onClick={handleClick}
        >
          <div className="w-full h-full bg-black bg-opacity-0 hover:bg-opacity-10 rounded-lg transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-white bg-opacity-90 rounded-full p-2">
              <Upload className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="w-full h-full border-2 border-dashed border-gray-300 hover:border-rose-300 rounded-lg cursor-pointer transition-colors duration-200 flex flex-col items-center justify-center bg-white bg-opacity-50 hover:bg-opacity-70"
        >
          <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500 text-center px-2">
            Upload {side} image
          </p>
          <p className="text-xs text-gray-400 text-center px-2 mt-1">
            Click to browse
          </p>
        </div>
      )}
    </div>
  );
};
