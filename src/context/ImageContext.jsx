import { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  // Images
  const [image, setImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [fileName, setFileName] = useState("image");

  // All editor settings
  const [settings, setSettings] = useState({
    // Compress
    compress: false,
    quality: 80,

    // Resize
    resize: false,
    width: 1920,
    height: 1080,
    keepAspectRatio: true,

    // Crop
    crop: false,
    cropPosition: { x: 0, y: 0 },
    zoom: 1,
    croppedAreaPixels: null,

    // Rotate
    rotate: false,
    rotation: 0,
    flipHorizontal: false,
    flipVertical: false,

    // Convert
    convert: false,
    format: "png",
  });

  const resetSettings = () => {
    setSettings({
      compress: false,
      quality: 80,

      resize: false,
      width: 1920,
      height: 1080,
      keepAspectRatio: true,

      crop: false,
      cropPosition: { x: 0, y: 0 },
      zoom: 1,
      croppedAreaPixels: null,

      rotate: false,
      rotation: 0,
      flipHorizontal: false,
      flipVertical: false,

      convert: false,
      format: "png",
    });
  };

  return (
    <ImageContext.Provider
      value={{
        image,
        setImage,

        outputImage,
        setOutputImage,

        fileName,
        setFileName,

        settings,
        setSettings,

        resetSettings,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);

  if (!context) {
    throw new Error("useImage must be used inside ImageProvider");
  }

  return context;
};