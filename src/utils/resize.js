const createImage = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.crossOrigin = "anonymous";

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = src;
  });
};

const resizeImage = async (
  imageSrc,
  {
    width,
    height,
    keepAspectRatio = true,
    format = "image/png",
    quality = 1,
  }
) => {
  const image = await createImage(imageSrc);

  let newWidth = width;
  let newHeight = height;

  if (keepAspectRatio) {
    const aspectRatio = image.width / image.height;

    if (width && !height) {
      newHeight = Math.round(width / aspectRatio);
    } else if (!width && height) {
      newWidth = Math.round(height * aspectRatio);
    } else if (width && height) {
      if (width / height > aspectRatio) {
        newWidth = Math.round(height * aspectRatio);
      } else {
        newHeight = Math.round(width / aspectRatio);
      }
    } else {
      newWidth = image.width;
      newHeight = image.height;
    }
  }

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = newWidth;
  canvas.height = newHeight;

  ctx.drawImage(image, 0, 0, newWidth, newHeight);

  return canvas.toDataURL(format, quality);
};

export default resizeImage;