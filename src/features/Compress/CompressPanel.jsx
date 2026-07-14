import { FiMinimize2 } from "react-icons/fi";
import Toggle from "../../components/Common/Toggle";
import { useImage } from "../../context/ImageContext";

const CompressPanel = () => {
  const { settings, setSettings } = useImage();

  const handleToggle = (checked) => {
    setSettings((prev) => ({
      ...prev,
      compress: checked,
    }));
  };

  const handleQualityChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      quality: Number(e.target.value),
    }));
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiMinimize2 className="text-xl text-blue-600" />
          <h3 className="text-lg font-semibold">Compress</h3>
        </div>

        <Toggle
          checked={settings.compress}
          onChange={handleToggle}
        />
      </div>

      {settings.compress && (
        <div className="space-y-4">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">
                Quality
              </span>

              <span className="text-sm text-gray-500">
                {settings.quality}%
              </span>
            </div>

            <input
              type="range"
              min="10"
              max="100"
              value={settings.quality}
              onChange={handleQualityChange}
              className="w-full cursor-pointer"
            />
          </div>

          <div className="rounded-lg bg-blue-50 p-3 text-sm text-gray-600">
            Lower quality = Smaller file size
          </div>
        </div>
      )}
    </div>
  );
};

export default CompressPanel;