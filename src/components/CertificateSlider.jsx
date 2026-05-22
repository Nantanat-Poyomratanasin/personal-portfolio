import { useState } from "react";

export default function CertificateSlider() {
  const certificates = [
    { title: "Frontend Development", year: "2023" },
    { title: "Backend Development", year: "2023" },
    { title: "UI/UX Design", year: "2022" },
    { title: "Full Stack Development", year: "2023" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById("certificate-slider");
    if (container) {
      const scrollAmount = 320;
      const newPosition =
        direction === "left"
          ? scrollPosition - scrollAmount
          : scrollPosition + scrollAmount;

      container.scrollLeft = newPosition;
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="mt-12 relative">
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleScroll("left")}
          className="flex-shrink-0 pixel-btn"
        >
          ← Prev
        </button>

        <div
          id="certificate-slider"
          className="flex gap-6 overflow-x-auto scroll-smooth flex-1"
          style={{ scrollBehavior: "smooth" }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 bg-gradient-to-br from-gray-200 to-gray-400 border-2 border-gray-800 pixel-card flex flex-col items-center justify-center text-center p-6"
            >
              <div className="text-4xl mb-3">🏆</div>
              <div className="font-semibold text-white text-lg">
                {cert.title}
              </div>
              <div className="text-white mt-2">{cert.year}</div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="flex-shrink-0 pixel-btn"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
