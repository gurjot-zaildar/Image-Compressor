import loadImage from "./imageLoader";

const rotateImage = async (
  imageSrc,
  {
    angle = 0,
    flipHorizontal = false,
    flipVertical = false,
    format = "image/png",
    quality = 1,
  } = {}
) => {
  const image = await loadImage(imageSrc);

  const radians = (angle * Math.PI) / 180;

  const sin = Math.abs(Math.sin(radians));
  const cos = Math.abs(Math.cos(radians));

  const newWidth = Math.ceil(
    image.width * cos + image.height * sin
  );

  const newHeight = Math.ceil(
    image.width * sin + image.height * cos
  );

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = newWidth;
  canvas.height = newHeight;

  ctx.translate(newWidth / 2, newHeight / 2);

  // Rotate
  ctx.rotate(radians);

  // Flip
  ctx.scale(
    flipHorizontal ? -1 : 1,
    flipVertical ? -1 : 1
  );

  // Draw image from center
  ctx.drawImage(
    image,
    -image.width / 2,
    -image.height / 2
  );

  return canvas.toDataURL(format, quality);
};

export default rotateImage;