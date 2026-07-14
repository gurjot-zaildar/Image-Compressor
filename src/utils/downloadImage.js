const MIME_EXTENSIONS = {
  png: "png",
  jpg: "jpg",
  jpeg: "jpg",
  webp: "webp",
};

const downloadImage = (
  image,
  fileName,
  format
) => {
  const link = document.createElement("a");

  link.href = image;

  link.download =
    `${fileName}.${MIME_EXTENSIONS[format] || "png"}`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

export default downloadImage;