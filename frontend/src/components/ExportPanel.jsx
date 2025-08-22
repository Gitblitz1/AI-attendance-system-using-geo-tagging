import api from "../api";

export default function ExportPanel() {
  const exportXlsx = async () => {
    try {
      const res = await api.get("/export/xlsx", { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "attendance.xlsx";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      alert(e.response?.data?.error || e.message);
    }
  };
  return (
    <div>
      <button onClick={exportXlsx} className="bg-green-600 text-white px-4 py-2 rounded">Download XLSX</button>
    </div>
  );
}
