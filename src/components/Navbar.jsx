export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav
      className="sticky top-0 z-50 pixelify-nav"
      style={{ backgroundColor: "#c9bab3", borderBottom: "3px solid #8b7d75" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h3
          onClick={() => setCurrentPage("home")}
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
        </h3>

        <div className="flex gap-8 font-semibold text-[18px]">
          <button
            onClick={() => setCurrentPage("home")}
            className="pb-2 transition"
            style={{
              color: currentPage === "home" ? "#5a5450" : "#7a7268",
              borderBottom:
                currentPage === "home" ? "2px solid #8b7d75" : "none",
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            Home
          </button>

          <button
            onClick={() => setCurrentPage("about")}
            className="pb-2 transition"
            style={{
              color: currentPage === "about" ? "#5a5450" : "#7a7268",
              borderBottom:
                currentPage === "about" ? "2px solid #8b7d75" : "none",
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            About
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 transition"
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
