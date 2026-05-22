import SkillCard from "../components/SkillCard";
import CertificateSlider from "../components/CertificateSlider";
import PixelWindow from "../components/PixelWindow";

export default function About() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"],
    },
    {
      category: "UI/UX Design",
      skills: [
        "Figma",
        "UI Design",
        "UX Research",
        "Prototyping",
        "Responsive",
      ],
    },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      duration: "2022 - Present",
      description:
        "Led development of customer-facing applications using React and modern web technologies. Improved performance by 40% through code optimization and architecture improvements.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      duration: "2020 - 2022",
      description:
        "Developed and maintained full-stack web applications. Worked with cross-functional teams to deliver features and improve user experience. Built REST APIs and implemented database schemas.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Co.",
      duration: "2019 - 2020",
      description:
        "Started career building web applications with HTML, CSS, and JavaScript. Collaborated with senior developers and gained hands-on experience in agile development practices.",
    },
  ];

  return (
    <div className="flex-1">
      {/* Skills Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#e6d9cf" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl font-black text-center mb-2"
            style={{ color: "#5a5450" }}
          >
            Skills
          </h2>
          <p className="text-center mb-12" style={{ color: "#7a7268" }}>
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skillGroup, index) => (
              <SkillCard
                key={index}
                category={skillGroup.category}
                skills={skillGroup.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#d4c5b9" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-black text-center mb-2"
            style={{ color: "#5a5450" }}
          >
            Work Experience
          </h2>
          <p className="text-center mb-12" style={{ color: "#7a7268" }}>
            My professional journey
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="border-l-4 pl-6 relative"
                style={{ borderColor: "#8b7d75" }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full -left-2 top-2"
                  style={{ backgroundColor: "#8b7d75" }}
                ></div>

                <h4
                  className="text-2xl font-bold mb-1"
                  style={{ color: "#5a5450" }}
                >
                  {exp.title}
                </h4>
                <p className="text-sm mb-2" style={{ color: "#7a7268" }}>
                  {exp.company}
                </p>
                <p className="text-xs mb-3" style={{ color: "#a89d96" }}>
                  {exp.duration}
                </p>
                <p className="leading-relaxed" style={{ color: "#7a7268" }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#e6d9cf" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-black text-center mb-2"
            style={{ color: "#5a5450" }}
          >
            Certificates
          </h2>
          <p className="text-center mb-12" style={{ color: "#7a7268" }}>
            Professional certifications and achievements
          </p>

          <CertificateSlider />
        </div>
      </section>
    </div>
  );
}
