export default function ResultCard({ title, content }) {
  return (
    <div className="result-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
