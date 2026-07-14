import loadImage from "./imageLoader";

const mimeTypes = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
};

const convertImage = async (imageSrc, { format, quality = 1 }) => {
  const image = await loadImage(imageSrc);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);

  return canvas.toDataURL(
    mimeTypes[format] || "image/png",
    quality
  );
};

export default convertImage;