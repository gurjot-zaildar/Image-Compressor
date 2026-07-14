import { useRef } from "react";
import { FiUploadCloud, FiImage } from "react-icons/fi";
import { useImage } from "../../context/ImageContext";

const Upload = () => {
  const inputRef = useRef(null);

  const {
    setImage,
    setFileName,
    setOutputImage,
    fileName,
  } = useImage();

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setOutputImage(null);

    setFileName(file.name.split(".")[0]);
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full">
      <div
        onClick={() => inputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white p-10 text-center transition hover:border-blue-500 hover:bg-blue-50"
      >
        <FiUploadCloud className="mb-4 text-6xl text-blue-500" />

        <h2 className="text-xl font-semibold">
          Drag & Drop your image here
        </h2>

        <p className="mt-2 text-gray-500">
          or click to browse
        </p>

        <button
          type="button"
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Choose Image
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>

      {fileName && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-100 p-4">
          <FiImage className="text-green-700" />
          <span className="font-medium">{fileName}</span>
        </div>
      )}
    </section>
  );
};

export default Upload;