import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div
      className="w-full
        min-h-screen
        flex
        flex-col 
        "
    >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}

      <Footer />
    </div>
  );
}

export default App;
