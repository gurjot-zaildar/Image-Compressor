import { useState } from "react";
import { useImage } from "../context/ImageContext";
import { processImage } from "../services/imageProcessor";

const useImageProcessor = () => {
  const [loading, setLoading] = useState(false);

  const {
    image,
    settings,
    setOutputImage,
  } = useImage();

  const generateImage = async () => {
    if (!image) return;

    setLoading(true);

    try {
      const output = await processImage(image, settings);

      setOutputImage(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    generateImage,
    loading,
  };
};

export default useImageProcessor;