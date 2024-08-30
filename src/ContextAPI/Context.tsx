import { createContext, useState, useContext, ReactNode } from "react";

// Define the type for the image data
type ImageData = {
  url: string; // The URL of the uploaded image
  file: File; // The original file object
};

// Define the type for the context
type ImageContextType = {
  images: ImageData[];
  addImage: (image: ImageData) => void;
};
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Create a provider component
export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [images, setImages] = useState<ImageData[]>([]);

  const addImage = (image: ImageData) => {
    setImages((prevImages) => [...prevImages, image]);
  };

  return (
    <ImageContext.Provider value={{ images, addImage }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the ImageContext
export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
