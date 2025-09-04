import { useState } from "react";

export default function UploadBox({ onFileUpload }) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`upload-box ${dragging ? "dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <p>Drag & drop your PDF or Image here, or click to upload</p>
      <input
        type="file"
        accept=".pdf,image/*"
        onChange={(e) => onFileUpload(e.target.files[0])}
        id="fileUpload"
        hidden
      />
      <label htmlFor="fileUpload" className="btn">Browse File</label>
    </div>
  );
}
