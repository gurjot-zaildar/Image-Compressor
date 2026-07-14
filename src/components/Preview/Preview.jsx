import { FiImage } from "react-icons/fi";
import { useImage } from "../../context/ImageContext";

const Preview = () => {
  const { image, outputImage } = useImage();

  const previewImage = outputImage || image;

  return (
    <section className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Preview</h2>

      <div className="flex h-[450px] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">
        {previewImage ? (
          <img
             src={outputImage || image}
            alt="Preview"
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <FiImage size={70} />
            <p className="mt-4 text-lg">No Image Selected</p>
            <span className="text-sm">
              Upload an image to start editing
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Preview;