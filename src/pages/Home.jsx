import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import ProjectCard from "../components/ProjectCard";
import SocialCard from "../components/SocialCard";

export default function Home() {
  const projects = [
    {
      number: 1,
      title: "E-Commerce Platform",
      tags: ["Product Design", "Backend Development"],
      category: "End-to-end",
      description:
        "A full-stack e-commerce website built with React, Node.js, and PostgreSQL. Features include product filtering, cart management, and secure checkout.",
      link: "#",
    },
    {
      number: 2,
      title: "Task Management App",
      tags: ["App Design", "Full Stack"],
      category: "Real-time",
      description:
        "A collaborative task management application with real-time updates, user authentication, and project organization features built with React and Firebase.",
      link: "#",
    },
    {
      number: 3,
      title: "Weather Dashboard",
      tags: ["UI Design", "Frontend"],
      category: "Data Visualization",
      description:
        "An interactive weather dashboard using OpenWeather API with beautiful visualizations, location search, and 5-day forecast features.",
      link: "#",
    },
  ];

  return (
    <div className="font-body">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-5">
        <Hero />

        <ProfileCard />
      </div>

      {/* Featured Projects Section */}
      <section className="py-24 px-6" style={{ backgroundColor: "#F5F1EA" }}>
        <div className="max-w-7xl mx-auto">
          {/* heading */}
          <div className=" text-center mb-20">
            <h2 className="text-6xl font-black" style={{ color: "#2F2C29" }}>
              Featured Projects
            </h2>

            <p className="mt-4 text-lg text-[#7B7773]">
              Check out some of my recent work
            </p>
          </div>

          {/* project cards */}
          <div className="flex flex-col gap-20">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "#d4c5b9" }}
      >
        <h2 className="text-4xl font-black mb-10" style={{ color: "#5a5450" }}>
          Let's Connect
        </h2>

        <div className="flex gap-6 justify-center flex-wrap max-w-2xl mx-auto">
          <SocialCard title="LinkedIn" />

          <SocialCard title="Email" />

          <SocialCard title="Contact" />
        </div>
      </section>
    </div>
  );
}
