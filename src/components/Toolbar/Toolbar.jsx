import CompressPanel from "../../features/Compress/CompressPanel";
import ResizePanel from "../../features/Resize/ResizePanel";
import CropPanel from "../../features/Crop/CropPanel";
import RotatePanel from "../../features/RotateFlip/RotatePanel";
import ConvertPanel from "../../features/Convert/ConvertPanel";

const Toolbar = () => {
  return (
    <aside className="space-y-5 rounded-2xl bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold">Editing Tools</h2>

      <CompressPanel />

      <ResizePanel />

      <CropPanel />

      <RotatePanel />

      <ConvertPanel />
    </aside>
  );
};

export default Toolbar;