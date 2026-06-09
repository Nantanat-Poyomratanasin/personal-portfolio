export default function WindowCard({ title, children, className = "" }) {
  return (
    <div
      className="px-3
    py-6
    w-full
    max-w-[220px]
    md:max-w-[240px]
    lg:max-w-[260px]
    mx-auto"
    >
      <div
        className={`
        bg-[#FAF8F4]
        border
        border-[#D8D1C7]
        
        overflow-hidden
        shadow-[0_2px_10px_rgba(0,0,0,0.03)]
        ${className}
      `}
      >
        {/* header */}
        <div
          className="
          py-1
          px-5
          border-b
          border-[#E7E0D7]
          flex
          items-center
          justify-between
          bg-[#F8F5F0]
        "
        >
          {/* title */}
          <h3
            className="
            text-[#3D3935]
            font-semibold
            text-lg
          "
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 500,
              color: "#5a5450",
            }}
          >
            {title}
          </h3>

          {/* window actions */}
          <div className="flex items-center  gap-4">
            <button
              className="
              text-[#6E6A67]
              text-xl
              hover:opacity-60
              transition
              
            "
            >
              −
            </button>

            <button
              className="
              text-[#6E6A67]
              text-sm
              hover:opacity-60
              transition
            "
            >
              □
            </button>

            <button
              className="
              text-[#6E6A67]
              text-xl
              hover:opacity-60
              transition
            "
            >
              ×
            </button>
          </div>
        </div>

        {/* content */}
        <div className="sm:p-3 lg:p-5 ">{children}</div>
      </div>
    </div>
  );
}
