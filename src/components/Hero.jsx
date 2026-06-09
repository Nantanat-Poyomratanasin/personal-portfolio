export default function HeroSection({ name, title, summary, resumeLink }) {
  const firstName = name?.split(" ")[0] || "Nantanat";
  return (
    <div
      className="
      bg-card
      border-border
      rounded-3xl
  shadow-soft

  px-6
  py-6

  md:px-8

  w-full
  md:max-w-[520px]

  flex
  flex-col
    "
    >
      {/* top */}
      <div>
        {/* title */}
        <div className="flex flex-col items-start lg:gap-5 md:gap-2">
          <h1
            className="
                text-3xl md:text-2xl
                font-black
                leading-tight
                text-[#2F2C29]
              "
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 500,
              color: "#5a5450",
            }}
          >
            Hi, I’m
            <span className="text-[#B89B7A] ml-4">{firstName}</span>
          </h1>
        </div>

        {/* description */}
        <p
          className="
              mt-4
              sm:text-[18px] lg:text-[16px]
              leading-relaxed
              text-[#4B5563]
            "
        >
          {summary ||
            "A frontend developer creating clean, modern and user-friendly digital experiences."}
        </p>
        {/* buttons */}
        <div className="flex gap-4 md:gap-5 mt-6 md:mt-3">
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-[#B8B0A4]
              px-6 md:px-9
              py-3
              rounded-xl
              font-semibold
              text-[#3D3935]
              hover:bg-[#F3EEE7]
              transition
              inline-block
            "
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 500,
              color: "#5a5450",
            }}
          >
            VIEW RESUME →
          </a>
        </div>
      </div>
    </div>
  );
}
