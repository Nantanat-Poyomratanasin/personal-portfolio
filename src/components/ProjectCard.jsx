import { useState } from "react";

export default function ProjectCard({ project }) {
  const [showImage, setShowImage] = useState(false);
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

        {/* Description */}
        <p
          className="text-[15px]
        leading-7 md:text-md text-gray-700 mb-4 md:mb-6"
        >
          {project.description}
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4">
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
            onClick={() => setShowImage(true)}
            className=" w-full
    h-full
    object-full
    rounded-2xl
    cursor-zoom-in
    transition
    duration-300
    hover:scale-[1.02]"
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
        {/* IMAGE MODAL */}
        {showImage && project.image && (
          <div
            className="
            fixed
            inset-0
            z-[9999]
            bg-black/70
            flex
            items-center
            justify-center
            p-4
            md:p-8
          "
            onClick={() => setShowImage(false)}
          >
            <button
              onClick={() => setShowImage(false)}
              className="
              absolute
              top-3
              right-6
              text-white
              text-4xl
              cursor-pointer
            "
            >
              ×
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="
              max-w-[95vw]
              max-h-[90vh]
              object-contain
              rounded-2xl
              shadow-2xl
            "
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
