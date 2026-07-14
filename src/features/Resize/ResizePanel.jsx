import { FiMaximize2 } from "react-icons/fi";
import Toggle from "../../components/Common/Toggle";
import { useImage } from "../../context/ImageContext";

const ResizePanel = () => {
  const { settings, setSettings } = useImage();

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiMaximize2 className="text-xl text-blue-600" />
          <h3 className="text-lg font-semibold">Resize</h3>
        </div>

        <Toggle
          checked={settings.resize}
          onChange={(checked) =>
            setSettings((prev) => ({
              ...prev,
              resize: checked,
            }))
          }
        />
      </div>

      {settings.resize && (
        <div className="space-y-4">
          {/* Width */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Width (px)
            </label>

            <input
              type="number"
              min="1"
              value={settings.width}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  width: Number(e.target.value),
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Height */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Height (px)
            </label>

            <input
              type="number"
              min="1"
              value={settings.height}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  height: Number(e.target.value),
                }))
              }
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            />
          </div>

          {/* Keep Aspect Ratio */}
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={settings.keepAspectRatio}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  keepAspectRatio: e.target.checked,
                }))
              }
            />

            <span className="text-sm font-medium">
              Keep Aspect Ratio
            </span>
          </label>
        </div>
      )}
    </div>
  );
};

export default ResizePanel;