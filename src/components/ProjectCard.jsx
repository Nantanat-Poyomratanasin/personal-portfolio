export default function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-card
      border
      border-border
      rounded-3xl
      shadow-soft
      py-4
      px-8
      grid
      grid-cols-1
      lg:grid-cols-[1fr_280px]
      gap-6
      items-center
      max-w-[820px]
      mx-auto
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
        <h3 className="text-xl font-semibold mb-3 text-text">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="
                px-3
                py-1
                rounded-full
                text-[10px]
                bg-[#F1ECE5]
                text-gray-700
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2">{project.category}</p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.viewLink || project.link}
            target="_blank"
            rel="noreferrer"
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
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 500,
              color: "#5a5450",
            }}
          >
            View Project →
          </a>

          <a
            href={project.githubLink || project.link}
            target="_blank"
            rel="noreferrer"
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
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 500,
              color: "#5a5450",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.262.82-.583 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3.003-.405c1.02.005 2.045.138 3.003.405 2.29-1.553 3.296-1.23 3.296-1.23.654 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.431.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .323.216.702.825.583C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="
        relative
        h-56
        rounded-2xl
        bg-[#EFE8DF]
        flex
        items-center
        justify-center
      "
      >
        <div className="text-6xl opacity-80">
          {project.number === 1 && "🛒"}
          {project.number === 2 && "✓"}
          {project.number === 3 && "🌤️"}
        </div>

        {/* Year */}
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
}
