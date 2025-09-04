import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="hero">
      <h1>Social Media Content Analyzer</h1>
      <p>
        Upload PDFs or images, extract insights instantly, and boost your content performance with AI-powered analysis.
      </p>
      <div className="hero-buttons">
        <Link to="/upload" className="btn">Get Started</Link>
        <a href="#features" className="btn secondary">Learn More</a>
      </div>
    </section>
  );
}
