import { FiRefreshCw } from "react-icons/fi";
import Toggle from "../../components/Common/Toggle";
import { useImage } from "../../context/ImageContext";

const RotatePanel = () => {
  const { settings, setSettings } = useImage();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiRefreshCw className="text-xl text-blue-600" />
          <h3 className="text-lg font-semibold">Rotate & Flip</h3>
        </div>

        <Toggle
          checked={settings.rotate}
          onChange={(checked) =>
            setSettings((prev) => ({
              ...prev,
              rotate: checked,
            }))
          }
        />
      </div>

      {settings.rotate && (
        <div className="space-y-5">
          {/* Rotation */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Rotation</span>
              <span className="text-sm text-gray-500">
                {settings.rotation}°
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={settings.rotation}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  rotation: Number(e.target.value),
                }))
              }
              className="w-full cursor-pointer"
            />
          </div>

          {/* Flip Horizontal */}
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
            <span className="text-sm font-medium">
              Flip Horizontal
            </span>

            <input
              type="checkbox"
              checked={settings.flipHorizontal}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  flipHorizontal: e.target.checked,
                }))
              }
            />
          </label>

          {/* Flip Vertical */}
          <label className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
            <span className="text-sm font-medium">
              Flip Vertical
            </span>

            <input
              type="checkbox"
              checked={settings.flipVertical}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  flipVertical: e.target.checked,
                }))
              }
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default RotatePanel;