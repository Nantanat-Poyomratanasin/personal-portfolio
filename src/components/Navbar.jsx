import { NavLink } from "react-router-dom";
import PixelCat from "../components/PixelCat";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="pixelify-nav" style={{ backgroundColor: "#c9bab3" }}>
      <div
        className="max-w-7xl mx-auto px-4
    md:px-6
    lg:px-6
    py-4 lg:flex justify-between items-center "
      >
        <NavLink
          to="/"
          className="logo-expand flex items-center gap-1 md:gap-1 lg:gap-2"
        >
          <div className="logo-text">
            <span
              className="logo-short
    ml-2
    md:ml-3
    lg:ml-5
   
    md:text-lg
    lg:text-xl"
            >
              NANTANAT P.
            </span>

            <span className="logo-full ">Ployyah</span>
          </div>
          <PixelCat />
        </NavLink>

        <div
          className="flex
gap-4
md:gap-6
lg:gap-8
mt-2
font-semibold
lg:text-[18px]
md:text-[20px]
text-[22px]"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pixel-nav-btn pb-2 ml-2 md:ml-3  transition ${isActive ? "active-nav" : ""}`
            }
            style={{
              color: "#7a7268",
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `pixel-nav-btn pb-2 transition ${isActive ? "active-nav" : ""}`
            }
            style={{
              color: "#7a7268",
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            About
          </NavLink>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-nav-btn pb-1 transition"
            style={{
              color: "#7a7268",
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
