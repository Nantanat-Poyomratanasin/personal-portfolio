import { NavLink } from "react-router-dom";

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="pixelify-nav" style={{ backgroundColor: "#c9bab3" }}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink
          to="/"
          className="cursor-pointer transition"
          style={{
            color: "#5a5450",
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 400,
          }}
          role="button"
          tabIndex={0}
        >
          Nantanat P.
        </NavLink>

        <div className="flex gap-8 font-semibold text-[18px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `pixel-nav-btn pb-2 transition ${isActive ? "active-nav" : ""}`
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
