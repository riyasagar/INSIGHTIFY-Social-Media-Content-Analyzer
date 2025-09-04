export default function HowItWorks() {
  const steps = [
    { num: 1, title: "Upload File", desc: "Drag & drop your PDF or image." },
    { num: 2, title: "Extract Text", desc: "We parse or use OCR automatically." },
    { num: 3, title: "Get Insights", desc: "AI generates performance tips." },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.num} className="step-card">
            <div className="step-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
