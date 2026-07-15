import Upload from "../components/Upload/Upload";
import Preview from "../components/Preview/Preview";
import Toolbar from "../components/Toolbar/Toolbar";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import { useEffect } from "react";
import { useImage } from "../context/ImageContext";
import { processImage } from "../services/imageProcessor";

const Home = () => {
   const {
    image,
    settings,
    setOutputImage,
  } = useImage();

  useEffect(() => {
    if (!image) return;

    const updatePreview = async () => {
      try {
        const result = await processImage(image, settings);
        setOutputImage(result);
      } catch (err) {
        console.error(err);
      }
    };

    updatePreview();
  }, [image, settings]);

  return (
    <main className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Resize Photo Online</h1>
          <p className="mt-2 text-gray-600">
            Resize, compress, crop, rotate, flip, and convert your images for free in seconds.
          </p>
        </div>

        {/* Upload */}
        <Upload />

        {/* Main Editor */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Preview */}
          <Preview />

          {/* Editing Tools */}
          <Toolbar />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
         
          <DownloadButton />
        </div>
      </div>
    </main>
  );
};

export default Home;