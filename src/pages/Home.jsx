import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import SocialCard from "../components/SocialCard";
import { profileData } from "../data/resume-data";

export default function Home() {
  const projects = [
    {
      number: 1,
      title: "E-Commerce Platform",
      tags: ["Full stack", "Web Development"],
      // category: "End-to-end",
      description:
        "A full-stack e-commerce website built with React, Node.js, and MongoDB. Features include Search product, cart and order management, and secure Login or registration.",
      viewLink: "https://group-project-03-sprint-02-oalifxv36.vercel.app/",
      githubLink:
        "https://github.com/Nantanat-Poyomratanasin/group_project_03_sprint_02.git",
    },
    {
      number: 2,
      title: "Flash card",
      tags: ["React"],
      // category: "Real-time",
      description:
        "A React flashcard app that lets users switch categories and track their score.",
      viewLink: "https://jsd-12-hackaday-three.vercel.app/",
      githubLink:
        "https://github.com/Nantanat-Poyomratanasin/JSD12_Hackaday.git",
    },
    // {
    //   number: 3,
    //   title: "Weather Dashboard",
    //   tags: ["UI Design", "Frontend"],
    //   // category: "Data Visualization",
    //   description:
    //     "An interactive weather dashboard using OpenWeather API with beautiful visualizations, location search, and 5-day forecast features.",
    //   viewLink: "https://jsd-12-hackaday-three.vercel.app/",
    // },
  ];

  return (
    <div className="font-body">
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-[max-content_360px] gap-1 items-center justify-center justify-items-center">
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
        <div className="max-w-[920px] mx-auto py-14">
          {/* heading */}
          <div className="text-center mb-15">
            <h2 className="text-5xl font-black" style={{ color: "#2F2C29" }}>
              Featured Projects
            </h2>

            <p
              className="mt-4 text-lg text-[#7B7773]"
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
        className="relative project-constellation py-12 px-6 text-center flex flex-col gap-4 items-center"
        style={{ backgroundColor: "#d4c5b9" }}
      >
        <h2
          className="text-5xl"
          style={{
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 400,
            color: "#5a5450",
          }}
        >
          Let's Connect
        </h2>

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
