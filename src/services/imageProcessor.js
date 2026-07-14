import cropImage from "../utils/crop";
import resizeImage from "../utils/resize";
import rotateImage from "../utils/rotate";
import compressImage from "../utils/compress";
import convertImage from "../utils/convert";

export const processImage = async (image, settings) => {
  let result = image;

  // Crop
  if (settings.crop && settings.croppedAreaPixels) {
    result = await cropImage(result, {
      croppedAreaPixels: settings.croppedAreaPixels,
    });
  }

  // Resize
  if (settings.resize) {
    result = await resizeImage(result, {
      width: settings.width,
      height: settings.height,
      keepAspectRatio: settings.keepAspectRatio,
    });
  }
 
  // Rotate / Flip
  if (settings.rotate) {
    result = await rotateImage(result, {
      angle: settings.rotation,
      flipHorizontal: settings.flipHorizontal,
      flipVertical: settings.flipVertical,
    });
  }

  // Compress
  if (settings.compress) {
    result = await compressImage(result, {
      quality: settings.quality,
    });
  }

  // Convert
  if (settings.convert) {
    result = await convertImage(result, {
      format: settings.format,
      quality: settings.quality / 100,
    });
  }

  return result;
};