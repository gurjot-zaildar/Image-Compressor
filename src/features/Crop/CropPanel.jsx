import { FiCrop } from "react-icons/fi";
import Cropper from "react-easy-crop";
import Toggle from "../../components/Common/Toggle";
import { useImage } from "../../context/ImageContext";

const CropPanel = () => {
  const {
    image,
    settings,
    setSettings,
  } = useImage();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiCrop className="text-xl text-blue-600" />
          <h3 className="text-lg font-semibold">Crop</h3>
        </div>

        <Toggle
          checked={settings.crop}
          onChange={(checked) =>
            setSettings((prev) => ({
              ...prev,
              crop: checked,
            }))
          }
        />
      </div>

      {settings.crop && (
        <div className="space-y-5">
          <div className="relative h-72 overflow-hidden rounded-lg bg-gray-100">
            {image ? (
              <Cropper
                image={image}
                crop={settings.cropPosition}
                zoom={settings.zoom}
                aspect={1}
                onCropChange={(cropPosition) =>
                  setSettings((prev) => ({
                    ...prev,
                    cropPosition,
                  }))
                }
                onZoomChange={(zoom) =>
                  setSettings((prev) => ({
                    ...prev,
                    zoom,
                  }))
                }
                onCropComplete={(_, croppedAreaPixels) =>
                  setSettings((prev) => ({
                    ...prev,
                    croppedAreaPixels,
                  }))
                }
              />
            ) : (
              <div className="flex h-full items-center justify-center text-gray-400">
                Upload an image first
              </div>
            )}
          </div>

          {/* Zoom */}
          <div>
            <div className="mb-2 flex justify-between">
              <span className="text-sm font-medium">Zoom</span>
              <span className="text-sm text-gray-500">
                {settings.zoom.toFixed(1)}x
              </span>
            </div>

            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={settings.zoom}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  zoom: Number(e.target.value),
                }))
              }
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CropPanel;