import SkillCard from "../components/SkillCard";
import CertificateSlider from "../components/CertificateSlider";

import {
  skillsData,
  experiencesData,
  certificationsData,
  educationData,
  languageData,
} from "../data/resume-data";

export default function About() {
  const experiences = experiencesData;

  return (
    <div className="flex-1">
      {/* Skills Section */}
      <section
        className="py-8 md:py-10 px-4 md:px-8"
        style={{ backgroundColor: "#e6d9cf" }}
      >
        <div className="max-w-8xl mx-auto px-4 md:mx-10">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-2"
            style={{ color: "#5a5450" }}
          >
            Skills
          </h2>
          <p
            className="text-center mb-8 text-base md:text-lg"
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
      <section
        className="relative project-constellation py-8 md:py-12 px-4 md:px-8"
        style={{ backgroundColor: "#d4c5b9" }}
      >
        <div className="max-w-4xl mx-auto px-5">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3"
            style={{ color: "#5a5450" }}
          >
            Experience
          </h2>
          <p
            className="text-center mb-8 text-base  md:text-lg"
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
                className="border-l-4 pl-4 md:pl-6 relative mx-5 md:ml-0"
                style={{ borderColor: "#8b7d75" }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full -left-2 top-2"
                  style={{ backgroundColor: "#8b7d75" }}
                ></div>

                <h4
                  className="lg:text-xl md:text-2xl font-bold mb-1"
                  style={{ color: "#5a5450" }}
                >
                  {exp.title}
                </h4>
                <p
                  className="text-sm  mb-2 font-medium"
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
                  className="list-disc list-inside space-y-2 text-[12px] lg:text-[14px] font-medium"
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

      {/* Education & Languages (centered heading, two equal columns) */}
      <section
        className="py-8 md:py-12 md:px-8 lg:px-10 px-5"
        style={{ backgroundColor: "#f3f0e8" }}
      >
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3"
            style={{ color: "#5a5450" }}
          >
            Education & Languages
          </h2>
          <p
            className="text-center mb-8 md:text-lg text-base"
            style={{
              fontFamily: "'Pixelify Sans', sans-serif",
              fontWeight: 400,
              color: "#5a5450",
            }}
          >
            My academic journey
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="text-left lg:flex lg:justify-center">
              <div className="space-y-6 max-w-md">
                {educationData.map((edu, i) => (
                  <div key={i} className="px-2 md:px-6 lg:px-4">
                    <h4
                      className="lg:text-xl md:text-2xl font-bold mb-1"
                      style={{ color: "#5a5450" }}
                    >
                      {edu.degree} — {edu.field}
                    </h4>
                    <p
                      className="text-sm mb-2 font-medium"
                      style={{ color: "#6E6A67" }}
                    >
                      {edu.school} · {edu.duration}
                    </p>
                    {edu.honors && (
                      <p
                        className="sm:text-sm md:text-m"
                        style={{ color: "#6E6A67" }}
                      >
                        {edu.honors}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-left lg:flex lg:justify-center">
              <div className="w-full max-w-sm text-left mx-2 md:mx-5 mb-1">
                {languageData.map((lang, idx) => (
                  <div key={idx}>
                    <h4
                      className="lg:text-xl md:text-2xl font-bold mb-1"
                      style={{ color: "#5a5450" }}
                    >
                      {lang.language}
                    </h4>
                    <p
                      className="text-sm mb-2 font-medium"
                      style={{ color: "#6E6A67" }}
                    >
                      {lang.level}{" "}
                    </p>
                    <p
                      className="text-sm font-medium mb-4"
                      style={{ color: "#6E6A67" }}
                    >
                      {lang.certification ? `${lang.certification}` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section
        className="py-5 md:py-12 lg:px-4 md:px-6 sm:px-1"
        style={{ backgroundColor: "#e6d9cf" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-3"
            style={{ color: "#5a5450" }}
          >
            Certificates
          </h2>
          <p
            className="text-center mb-8 mx-10 text-base md:text-lg"
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
