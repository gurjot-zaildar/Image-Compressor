import imageCompression from "browser-image-compression";

const dataURLToFile = async (
  dataUrl,
  fileName = "image.png"
) => {
  const response = await fetch(dataUrl);
  const blob = await response.blob();

  return new File([blob], fileName, {
    type: blob.type,
  });
};

const fileToDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
};

const compressImage = async (
  imageSrc,
  {
    quality = 80,
    maxWidthOrHeight,
  } = {}
) => {
  const imageFile = await dataURLToFile(imageSrc);

  const options = {
    maxSizeMB: 5,
    maxWidthOrHeight,
    useWebWorker: true,
    initialQuality: quality / 100,
  };

  const compressedFile = await imageCompression(
    imageFile,
    options
  );

  return await fileToDataURL(compressedFile);
};

export default compressImage;