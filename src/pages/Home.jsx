import Hero from "../components/Hero";
// import PixelHero from "../components/PixelHero";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import SocialCard from "../components/SocialCard";
import { profileData } from "../data/resume-data";
import WalkingCat from "../components/WalkingCat";

export default function Home() {
  const projects = [
    {
      number: 1,
      title: "Readly",
      video: "/videos/readly.mp4",
      tags: ["Full stack", "Web Development", "E-Commerce Project", "Agile"],
      // category: "End-to-end",
      description:
        "A full-stack e-commerce website built with React, Node.js, and MongoDB. Features include Search product, cart and order management, and secure Login or registration.",
      viewLink: "https://group-project-03-sprint-02-seven.vercel.app/",
      githubLink:
        "https://github.com/Nantanat-Poyomratanasin/group_project_03_sprint_02.git",
    },
    {
      number: 2,
      title: "Flash card",
      video: "/videos/flashcard.mp4",
      tags: ["React", "JavaScript"],
      // category: "Real-time",
      description:
        "A React flashcard app that lets users switch categories and track their score.",
      viewLink: "https://jsd-12-hackaday-three.vercel.app/",
      githubLink:
        "https://github.com/Nantanat-Poyomratanasin/JSD12_Hackaday.git",
    },
    {
      number: 3,
      title: "Escape castle with Pokemon!",
      video: "/videos/pokemonEscape.mp4",
      tags: ["Node.js", "Async/Await", "React", "JavaScript"],
      // category: "Data Visualization",
      description:
        "A React rescue game that sends random Pokemon to help users in Secret Room.",
      viewLink: "https://pokemon-escape-castle.vercel.app/",
      githubLink:
        "https://github.com/Nantanat-Poyomratanasin/pokemon-escape-castle.git",
    },
    {
      number: 4,
      title: "Don't Bother Me! 👻",
      video: "/videos/dont-bother-me.mp4",
      tags: ["JavaScript", "DOM", "Tailwind", "CSS"],
      // category: "Data Visualization",
      description:
        "A clicker game inspired from Cookie Clicker game built with JavaScript where players annoy a character by clicking, purchasing upgrades, and summoning ghosts for automatic clicks.",
      viewLink: "https://jsd12-week-07-ruby.vercel.app/",
      githubLink:
        "https://github.com/Nantanat-Poyomratanasin/jsd12_week_07/tree/354f7e9d7741eed8bfaa2d7a5bef0b927170b7c7/dontBotherMegame",
    },
  ];

  return (
    <div className="font-body hero-section">
      {/* <PixelHero /> */}
      <div
        className="flex flex-col
    md:flex-row
    items-center
    justify-center
    gap-4
    max-w-[1000px]
    md:max-w-[720px]
    mx-auto
    mt-8
    md:mt-4
    px-4
    md:px-6

    mb-10
    lg:mb-6

    "
      >
        <Hero
          name={profileData.name}
          title={profileData.title}
          summary={profileData.summary}
          resumeLink={profileData.resume}
        />

        <ProfileCard />
      </div>

      {/* Featured Projects Section */}
      <section style={{ backgroundColor: "#F5F1EA" }} className="relative">
        <div className="mx-auto py-8 md:py-14 px-6 md:px-8">
          {/* heading */}
          <div className="text-center mb-10 md:mb-15">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black"
              style={{ color: "#2F2C29" }}
            >
              Featured Projects
            </h2>

            <p
              className="mt-4 text-base md:text-lg text-[#7B7773]"
              style={{
                fontFamily: "'Pixelify Sans', sans-serif",
                fontWeight: 400,
                color: "#5a5450",
              }}
            >
              Check out some of my recent work!
            </p>
          </div>

          {/* project cards */}
          <div className="flex flex-col gap-8 mt-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section
        className="relative project-constellation pb-16
md:pb-12 py-8 md:py-12 px-4 md:px-6 text-center flex flex-col gap-4 items-center contact-section"
        style={{ backgroundColor: "#d4c5b9" }}
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 400,
            color: "#5a5450",
          }}
        >
          Let's Connect
        </h2>
        <WalkingCat />
        <div className="flex gap-6 justify-center flex-wrap max-w-2xl mx-auto my-4">
          <SocialCard title="LinkedIn" href={profileData.linkedin} />
          <SocialCard title="GitHub" href={profileData.github} />
          <SocialCard title="Email" href={`mailto:${profileData.email}`} />
          {/* <SocialCard title="Contact" href={`tel:${profileData.phone}`} /> */}
        </div>
      </section>
    </div>
  );
}
