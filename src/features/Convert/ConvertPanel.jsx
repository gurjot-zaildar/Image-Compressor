import { FiImage } from "react-icons/fi";
import Toggle from "../../components/Common/Toggle";
import { useImage } from "../../context/ImageContext";

const ConvertPanel = () => {
  const { settings, setSettings } = useImage();

  const formats = ["png", "jpg", "webp"];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiImage className="text-xl text-blue-600" />
          <h3 className="text-lg font-semibold">Convert Format</h3>
        </div>

        <Toggle
          checked={settings.convert}
          onChange={(checked) =>
            setSettings((prev) => ({
              ...prev,
              convert: checked,
            }))
          }
        />
      </div>

      {settings.convert && (
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Select the output image format.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {formats.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    format: item,
                  }))
                }
                className={`rounded-lg border px-4 py-3 text-sm font-semibold uppercase transition ${
                  settings.format === item
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-300 bg-white hover:border-blue-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="rounded-lg bg-blue-50 p-3 text-sm text-gray-600">
            Output Format:
            <span className="ml-1 font-semibold uppercase">
              {settings.format}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConvertPanel;