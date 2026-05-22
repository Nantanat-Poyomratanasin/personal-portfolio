import WindowCard from "./WindowCard";

export default function HeroSection() {
  return (
    // <WindowCard className="min-h-[500px]">
    <div
      className="
      bg-card
      border-border
      rounded-3xl
      shadow-soft
      p-10
      m-10
      gap-8
      items-start
    "
    >
      {/* top */}
      <div>
        {/* title */}
        <div className="flex flex-col items-start gap-5">
          <h1
            className="
                text-6xl
                font-black
                leading-tight
                text-[#2F2C29]
              "
          >
            Hi, I’m
            <span className="text-[#B89B7A] ml-4">Nantanat</span>
          </h1>
        </div>

        {/* description */}
        <p
          className="
              mt-10
              text-3xl
              leading-relaxed
              text-[#4B5563]
              max-w-4xl
            "
        >
          A frontend developer creating clean, modern and user-friendly digital
          experiences.
        </p>
        {/* buttons */}
        <div className="flex gap-5 mt-14">
          <button
            className="
              border
              border-[#B8B0A4]
              px-8
              py-4
              rounded-xl
              font-semibold
              text-[#3D3935]
              hover:bg-[#F3EEE7]
              transition
            "
          >
            VIEW RESUME →
          </button>
        </div>
      </div>
    </div>
    // </WindowCard>
  );
}
