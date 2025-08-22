import { useEffect, useState } from "react";

export default function Geofence() {
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => setError(err.message)
    );
  }, []);

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-700">Your location:</p>
      <pre className="bg-gray-100 rounded p-2 text-sm">{JSON.stringify(coords, null, 2)}</pre>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
