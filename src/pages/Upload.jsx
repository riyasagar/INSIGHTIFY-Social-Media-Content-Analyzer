import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseImage } from "../lib/ocrParser"; // OCR function
import { extractTextFromPDF } from "../lib/pdfParser"; // PDF parser

export default function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    // Allowed types
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(selected.type)) {
      setError("Only PDF, JPG, or PNG files are allowed.");
      setFile(null);
      return;
    }

    // Max size 10 MB
    if (selected.size > 10 * 1024 * 1024) {
      setError("File size should be less than 10 MB.");
      setFile(null);
      return;
    }

    setError("");
    setFile(selected);
  };

  const handleUpload = async () => {
    if (!file) return;

    let extractedText = "";

    // PDF parsing
    if (file.type === "application/pdf") {
      try {
        extractedText = await extractTextFromPDF(file);
      } catch (err) {
        setError("Failed to parse PDF. Please try another file.");
        return;
      }
    } else {
      // Image OCR
      try {
        extractedText = await parseImage(file);
      } catch (err) {
        setError("Failed to extract text from image. Please try another file.");
        return;
      }
    }

    navigate("/analyze", {
      state: { fileName: file.name, extractedText },
    });
  };

  return (
    <div className="upload-container">
      <h2>Upload Your File</h2>
      <p>Supports PDF, JPG, PNG | Max 10 MB</p>

      <label className="file-dropzone">
        {file ? file.name : "Drag & drop your file here or click to select"}
        <input type="file" onChange={handleFileChange} />
      </label>

      {error && <p className="error">{error}</p>}

      <button className="upload-btn" onClick={handleUpload} disabled={!file}>
        Upload & Analyze
      </button>

      <style>{`
        .upload-container {
          max-width: 500px;
          margin: 50px auto;
          padding: 30px;
          border: 2px dashed #007BFF;
          border-radius: 12px;
          text-align: center;
          background-color: #f8f9fa;
          font-family: Arial, sans-serif;
        }

        .file-dropzone {
          display: block;
          padding: 40px;
          margin: 20px 0;
          border: 2px dashed #007BFF;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .file-dropzone:hover {
          background-color: #e9f5ff;
        }

        .file-dropzone input {
          display: none;
        }

        .upload-btn {
          background-color: #007BFF;
          color: white;
          border: none;
          padding: 12px 25px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s;
        }

        .upload-btn:hover {
          background-color: #0056b3;
        }

        .upload-btn:disabled {
          background-color: #a0c4ff;
          cursor: not-allowed;
        }

        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
