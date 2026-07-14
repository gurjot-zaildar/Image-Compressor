const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    // Allow images from other origins (when permitted)
    image.crossOrigin = "anonymous";

    image.onload = () => resolve(image);

    image.onerror = () =>
      reject(new Error("Failed to load image."));

    image.src = src;
  });
};

export default loadImage;