import { useState } from "react";

export default function Skills() {
  const [skillType, setSkillType] = useState("technical");

  const skills = {
    technical: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 70 },
      { name: "React", level: 65 },
      { name: "SQL", level: 70 },
      { name: "C Programming", level: 65 },
    ],
    soft: [
      { name: "Adaptability", level: 90 },
      { name: "Teamwork", level: 85 },
      { name: "Problem Solving", level: 80 },
      { name: "Communication", level: 75 },
      { name: "Time Management", level: 80 },
    ],
  };

  return (
    <div
      id="skills"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Skills
          </h2>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkillType("technical")}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              skillType === "technical"
                ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg"
                : "text-gray-600 hover:text-indigo-800"
            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkillType("soft")}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              skillType === "soft"
                ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg"
                : "text-gray-600 hover:text-indigo-800"
            }`}
          >
            Soft Skills
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[skillType].map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-600">
                  {skill.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    {skill.level >= 90
                      ? "Expert"
                      : skill.level >= 75
                      ? "Advanced"
                      : skill.level >= 60
                      ? "Intermediate"
                      : "Beginner"}
                  </span>
                  <span className="text-sm font-semibold text-indigo-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
