import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-card
      border
      border-border
      rounded-3xl
      shadow-soft
      py-3
px-4
md:px-6
      grid
      grid-cols-1
      lg:grid-cols-[1fr_520px]
      gap-4 md:gap-6
      items-center
      w-full
      max-w-[360px]
      md:max-w-[680px]
      lg:max-w-[940px]
      mx-auto
    "
    >
      {/* Left Side */}
      <div className="flex flex-col ">
        {/* Number */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-black"></div>

          <span className="text-sm font-medium text-gray-500">
            No. {project.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3 text-text">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2 md:mb-3">
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
        <p className="text-sm text-gray-500 mb-1">{project.category}</p>

        {/* Description */}
        <p
          className="text-[15px]
        leading-7 md:text-md text-gray-700 mb-4 md:mb-6"
        >
          {project.description}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
          {/* ถ้าเป็น Case Study ภายในเว็บ */}
          {project.internal ? (
            <Link
              to={project.viewLink}
              className="
                inline-flex
                items-center
                gap-2
                border
                border-border
                rounded-xl
                px-4 md:px-5
                py-2 md:py-3
                text-sm md:text-base
                hover:bg-[#F4EEE7]
                transition
              "
              style={{
                fontFamily: "'Pixelify Sans', sans-serif",
                fontWeight: 500,
                color: "#5a5450",
              }}
            >
              View Case Study →
            </Link>
          ) : (
            /* ถ้าเป็น Project ที่เปิดเว็บภายนอก */
            <a
              href={project.viewLink}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-border
                rounded-xl
                px-4 md:px-5
                py-2 md:py-3
                text-sm md:text-base
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
          )}

          {/* GitHub Button */}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-border
                rounded-xl
                px-4 md:px-5
                py-2 md:py-3
                text-sm md:text-base
                hover:bg-[#F4EEE7]
                transition
              "
              style={{
                fontFamily: "'Pixelify Sans', sans-serif",
                fontWeight: 500,
                color: "#5a5450",
              }}
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div
        className="
        relative
        h-44 md:h-80
        rounded-2xl
        bg-[#EFE8DF]
        flex
        items-center
        justify-center
      "
      >
        {/* Project มี Video */}
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : /* Project มี Image */
        project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          /* ถ้ายังไม่มีทั้ง Video และ Image */
          <div
            className="text-center px-6 text-xl text-[#625D58]"
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
            }}
          >
            {project.title}
          </div>
        )}
      </div>
    </div>
  );
}
