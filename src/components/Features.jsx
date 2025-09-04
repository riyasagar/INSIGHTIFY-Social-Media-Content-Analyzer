export default function Features() {
  const features = [
    {
      title: "PDF Parsing",
      desc: "Extract text from PDFs while keeping structure intact.",
    },
    {
      title: "OCR for Images",
      desc: "Process images with accurate text recognition.",
    },
    {
      title: "Smart Insights",
      desc: "AI-powered analysis to improve your content.",
    },
    {
      title: "Fast Processing",
      desc: "Quick and reliable results every time.",
    },
    {
      title: "Readability Scores",
      desc: "Get detailed readability metrics to improve clarity.",
    },
    {
      title: "SEO Suggestions",
      desc: "Receive tips to optimize your content for search engines.",
    },
  ];

  return (
    <section id="features" className="features">
      <h2>What You Can Do</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
