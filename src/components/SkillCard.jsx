export default function SkillCard({ category, skills }) {
  return (
    <div className="bg-gray-50 border-2 border-gray-800 p-4 md:p-6 text-center pixel-card hover:bg-gray-100 transition-colors hover:-translate-y-1">
      <h3 className="text-base md:text-xl font-bold mb-4 md:mb-6">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 text-white px-3 py-1 text-sm font-semibold rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
