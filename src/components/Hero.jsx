export default function HeroSection({ name, title, summary, resumeLink }) {
  const firstName = name?.split(" ")[0] || "Nantanat";
  return (
    <div
      className="
      bg-card
      border-border
      rounded-3xl
      shadow-soft
      pl-12
      pr-8
      pt-8
      pb-2
      mt-11
      ml-14
      gap-3
      items-start
      max-h-[360px]
      max-w-[640px]
      flex
      flex-col
      lg:flex-row
    "
    >
      {/* top */}
      <div>
        {/* title */}
        <div className="flex flex-col items-start gap-5">
          <h1
            className="
                text-3xl
                font-black
                leading-tight
                text-[#2F2C29]
              "
          >
            Hi, I’m
            <span className="text-[#B89B7A] ml-4">{firstName}</span>
          </h1>
        </div>

        {/* description */}
        <p
          className="
              mt-4
              text-[18px]
              leading-relaxed
              text-[#4B5563]
              
            "
        >
          {summary ||
            "A frontend developer creating clean, modern and user-friendly digital experiences."}
        </p>
        {/* buttons */}
        <div className="flex gap-5 mt-7">
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-[#B8B0A4]
              px-9
              py-3
              rounded-xl
              font-semibold
              text-[#3D3935]
              hover:bg-[#F3EEE7]
              transition
              inline-block
            "
          >
            VIEW RESUME →
          </a>
        </div>
      </div>
    </div>
  );
}
