import { Routes, Route } from "react-router-dom";
import PixelTrail from "./components/PixelTrail";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <PixelTrail />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
