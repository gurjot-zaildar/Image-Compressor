import { FiDownload } from "react-icons/fi";
import downloadImage from "../../utils/downloadImage";
import { useImage } from "../../context/ImageContext";

const DownloadButton = () => {
  const { outputImage, fileName, settings } = useImage();
  const format = settings?.format || "png";

  return (
    <button
      onClick={() =>
        downloadImage(outputImage, fileName, format)
      }
      disabled={!outputImage}
      className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700 disabled:opacity-50"
    >
      <FiDownload className="mr-2 inline" />
      Download
    </button> 
  );
};

export default DownloadButton;