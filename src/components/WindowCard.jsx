export default function WindowCard({ title, children, className = "" }) {
  return (
    <div className="pr-8 py-6 mr-5 max-w-[320px] ">
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
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
