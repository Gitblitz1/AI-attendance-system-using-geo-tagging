import { useRef, useEffect, useState } from "react";
import api from "../api";

export default function FaceCapture({ user }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access error:", err);
        setMessage("Camera access blocked");
      }
    };
    startCamera();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  const capture = async (mode) => {
    if (!videoRef.current || !canvasRef.current) return;
    setLoading(true);
    setMessage("");
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    try {
      const res = await api.post(`/attendance/${mode}`, {
        image: dataUrl,
        uid: user?.uid,
        email: user?.email,
      });
      setMessage(res.data?.message || "Success");
    } catch (e) {
      setMessage(e.response?.data?.error || e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <video ref={videoRef} autoPlay playsInline className="w-full rounded-lg border" />
      <canvas ref={canvasRef} className="hidden" />
      {message && <p className="text-sm">{message}</p>}
      <div className="flex gap-3">
        <button disabled={loading} onClick={() => capture("enroll")}
          className="bg-gray-900 text-white px-4 py-2 rounded disabled:opacity-50">Enroll Face</button>
        <button disabled={loading} onClick={() => capture("mark")}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">Mark Attendance</button>
      </div>
    </div>
  );
}
