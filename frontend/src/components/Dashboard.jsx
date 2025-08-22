import FaceCapture from "./FaceCapture.jsx";
import Geofence from "./Geofence.jsx";
import ExportPanel from "./ExportPanel.jsx";

export default function Dashboard({ user }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-2xl font-semibold">
        Welcome, {user?.displayName || user?.email}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-4 shadow">
          <h2 className="font-semibold mb-3">Face Capture</h2>
          <FaceCapture user={user} />
        </div>
        <div className="bg-white rounded-2xl p-4 shadow">
          <h2 className="font-semibold mb-3">Geofence</h2>
          <Geofence />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold mb-3">Export</h2>
        <ExportPanel />
      </div>
    </div>
  );
}
