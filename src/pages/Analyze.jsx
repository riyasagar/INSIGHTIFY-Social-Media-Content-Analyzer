import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import { analyzeContent } from "../lib/analyzer";

export default function Analyze() {
  const location = useLocation();
  const { fileName, extractedText } = location.state || {};

  const analysis = extractedText ? analyzeContent(extractedText) : null;

  return (
    <div className="container">
      <h1 className="page-title">Analysis Results</h1>

      {fileName && (
        <ResultCard title="File Analyzed" content={fileName} />
      )}

      {extractedText && (
        <ResultCard title="Extracted Text" content={extractedText} />
      )}

      {analysis && (
        <ResultCard
          title="AI Insights"
          content={
            <>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>
                <div style={{ flex: "1 1 200px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <h4>Word Count</h4>
                  <p>{analysis.wordCount}</p>
                </div>
                <div style={{ flex: "1 1 200px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <h4>Sentence Count</h4>
                  <p>{analysis.sentenceCount}</p>
                </div>
                <div style={{ flex: "1 1 200px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <h4>Readability</h4>
                  <p>{analysis.readability}/100</p>
                </div>
                <div style={{ flex: "1 1 200px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <h4>Engagement</h4>
                  <p>{analysis.engagement}/100</p>
                </div>
                <div style={{ flex: "1 1 200px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <h4>Sentiment</h4>
                  <p>{analysis.sentiment}</p>
                </div>
                <div style={{ flex: "1 1 200px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  <h4>Headings Detected</h4>
                  <p>{analysis.hasHeadings ? "Yes" : "No"}</p>
                </div>
              </div>

              <h3>Top Keywords</h3>
              <p>{analysis.topKeywords.join(", ") || "None"}</p>

              <h3>Improvement Suggestions</h3>
              <ul>
                {analysis.suggestions.map((s, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <b>{s.category}:</b> {s.advice}
                  </li>
                ))}
              </ul>
            </>
          }
        />
      )}
    </div>
  );
}
