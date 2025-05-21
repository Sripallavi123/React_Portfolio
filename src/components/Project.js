import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "Web application that displays real-time weather data using OpenWeatherMap API",
      link: "https://github.com/Sripallavi123/WeatherApp.git",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    },
    {
      id: 2,
      title: "Quiz Game",
      description:
        "Developed a web application of Quiz Game having 80 questions on different categories to test the knowledge of users.",
      link: "https://github.com/Sripallavi123/Micro_IT_Quiz_Projeect.git",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg p-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
