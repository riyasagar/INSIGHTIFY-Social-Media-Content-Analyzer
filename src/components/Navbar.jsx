import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container nav-inner">
        <Link to="/" className="logo">Insightify</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/analyze">Analyze</Link>
        </div>
      </div>
    </nav>
  );
}
