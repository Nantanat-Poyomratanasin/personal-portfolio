import { useState } from "react";

export default function CertificateSlider({ certificates }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const closeModal = () => setSelectedImage(null);

  return (
    <div className="my-6 relative">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={() => handleScroll("left")}
          className="hidden md:block flex-shrink-0 pixel-btn"
          style={{
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 500,
            color: "#5a5450",
          }}
        >
          ← Prev
        </button>

        <div
          id="certificate-slider"
          className="px-8 flex item-center gap-3 md:gap-8 lg:gap-6 sm:gap-8 justify-start md:justify-start overflow-x-auto overflow-y-hidden scroll-smooth flex-1 hide-scrollbar"
          style={{ scrollBehavior: "smooth", touchAction: "pan-x" }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 rounded-3xl bg-white border-2 border-gray-300 shadow-soft pixel-card overflow-hidden flex-shrink-0
              w-[85%]
              sm:w-[90%]
              md:w-[calc(50%-1rem)]
              lg:w-[calc(33.333%-0.5rem)]"
            >
              {cert.image ? (
                <button
                  type="button"
                  onClick={() => setSelectedImage(cert.image)}
                  className="w-full"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="md:h-48 lg:h-44  sm:h-72  w-full object-cover cursor-pointer"
                  />
                </button>
              ) : (
                <div className="h-[180px] md:h-40 lg:h-44 flex items-center justify-center bg-[#f3f0e8] text-3xl md:text-4xl">
                  🏆
                </div>
              )}

              <div className="px-3 pb-3 md:p-4 text-left">
                <div className="font-semibold text-sm md:text-base text-[#2f2c29]">
                  {cert.title}
                </div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">
                  {cert.issuer}
                </div>
                <div className="text-xs text-gray-500 mt-1">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="hidden md:block flex-shrink-0 pixel-btn"
          style={{
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 500,
            color: "#5a5450",
          }}
        >
          Next →
        </button>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected certificate"
              className="max-w-full max-h-[90vh] rounded-3xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
