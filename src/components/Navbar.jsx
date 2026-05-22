export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{ backgroundColor: "#c9bab3", borderBottom: "3px solid #8b7d75" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          className="text-2xl font-black cursor-pointer transition font-heading"
          onClick={() => setCurrentPage("home")}
          style={{ color: "#5a5450" }}
        >
          Nantanat P.
        </button>

        <div className="flex gap-8 font-semibold text-sm">
          <button
            onClick={() => setCurrentPage("home")}
            className="pb-2 transition"
            style={{
              color: currentPage === "home" ? "#5a5450" : "#7a7268",
              borderBottom:
                currentPage === "home" ? "2px solid #8b7d75" : "none",
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
            }}
          >
            About
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 transition"
            style={{ color: "#7a7268" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
