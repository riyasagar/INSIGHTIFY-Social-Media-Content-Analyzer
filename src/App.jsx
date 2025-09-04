import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Analyze from "./pages/Analyze";
import Footer from "./components/Footer"; 
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/analyze" element={<Analyze />} />
        </Routes>
      </div>

      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
