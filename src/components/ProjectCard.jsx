export default function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-card
      border
      border-border
      rounded-3xl
      shadow-soft
      p-6
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-8
      items-center
    "
    >
      {/* Left Side */}
      <div className="flex flex-col">
        {/* Number */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-black"></div>

          <span className="text-sm font-medium text-gray-500">
            No. {project.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-4xl font-semibold mb-4 text-text">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                bg-[#F1ECE5]
                text-gray-700
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-4">{project.category}</p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Button */}
        <a
          href={project.link}
          className="
            inline-flex
            items-center
            gap-2
            border
            border-border
            rounded-xl
            px-5
            py-3
            w-fit
            hover:bg-[#F4EEE7]
            transition
          "
        >
          View Project →
        </a>
      </div>

      {/* Right Side */}
      <div
        className="
        relative
        h-80
        rounded-2xl
        bg-[#EFE8DF]
        flex
        items-center
        justify-center
      "
      >
        <div className="text-7xl opacity-80">
          {project.number === 1 && "🛒"}
          {project.number === 2 && "✓"}
          {project.number === 3 && "🌤️"}
        </div>

        {/* Year */}
        <div
          className="
          absolute
          top-4
          right-4
          bg-white
          rounded-xl
          px-4
          py-2
          text-sm
        "
        >
          2025
        </div>
      </div>
    </div>
  );
}
