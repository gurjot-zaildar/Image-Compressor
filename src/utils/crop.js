const createImage = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.crossOrigin = "anonymous";

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = src;
  });
};

const cropImage = async (imageSrc, { croppedAreaPixels }) => {
  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const {
    x,
    y,
    width,
    height,
  } = croppedAreaPixels;

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(
    image,
    x,
    y,
    width,
    height,
    0,
    0,
    width,
    height
  );

  return canvas.toDataURL("image/png");
};

export default cropImage;