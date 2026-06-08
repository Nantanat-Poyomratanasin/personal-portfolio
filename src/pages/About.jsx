import SkillCard from "../components/SkillCard";
import CertificateSlider from "../components/CertificateSlider";
import PixelWindow from "../components/PixelWindow";
import {
  skillsData,
  experiencesData,
  certificationsData,
} from "../data/resume-data";

export default function About() {
  const experiences = experiencesData;

  return (
    <div className="flex-1">
      {/* Skills Section */}
      <section className="py-10 px-8" style={{ backgroundColor: "#e6d9cf" }}>
        <div className="max-w-8xl max-h-[520px] mx-10">
          <h2
            className="text-5xl font-black text-center mb-2"
            style={{ color: "#5a5450" }}
          >
            Skills
          </h2>
          <p
            className="text-center mb-8 text-lg"
            style={{ color: "#6E6A67" }}
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
              color: "#5a5450",
            }}
          >
            Technologies & Tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
      <section className="py-12 px-8" style={{ backgroundColor: "#d4c5b9" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-black text-center mb-3"
            style={{ color: "#5a5450" }}
          >
            Experience
          </h2>
          <p
            className="text-center mb-12 text-lg"
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
              color: "#5a5450",
            }}
          >
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
                <p
                  className="text-sm mb-2 font-medium"
                  style={{ color: "#6E6A67" }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-xs mb-3 font-medium"
                  style={{ color: "#6E6A67" }}
                >
                  {exp.duration}
                </p>
                <ul
                  className="list-disc list-inside space-y-2 text-sm font-medium"
                  style={{ color: "#6E6A67" }}
                >
                  {exp.points?.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-12 px-8" style={{ backgroundColor: "#e6d9cf" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-black text-center mb-2"
            style={{ color: "#5a5450" }}
          >
            Certificates
          </h2>
          <p
            className="text-center mb-12 text-lg"
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
              color: "#5a5450",
            }}
          >
            Professional certifications and achievements
          </p>

          <CertificateSlider certificates={certificationsData} />
        </div>
      </section>
    </div>
  );
}
