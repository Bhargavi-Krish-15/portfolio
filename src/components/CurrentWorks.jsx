import { FiExternalLink, FiGithub } from "react-icons/fi";

function CurrentWorks() {
  const currentProjects = [
    {
        title: "Application Development Volunteer",
        description:"Currently in the development team of a web-based application for wireless network simulations using real-world geographical data by enhancing features along with the sandbox for network creation, NS3-based simulations, and heatmap visualizations.",
        status:"Ongoing",
        tech: ["Python", "Flask", "MySql"],
        live: "https://wttool.eng.buffalo.edu"
    },
    {
      title: "Portfolio Website",
      description: "Building and enhancing my portfolio website using React and Tailwind CSS, implementing responsive design and smooth animations.",
      status: "In Progress",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Bhargavi-Krish-15/portfolio",
      live: "https://bhargavi-krish-15.github.io/portfolio/"
    },
    {
      title: "Learning Full Stack Development",
      description: "Currently doing Certifications on advanced concepts in full-stack development, focusing on modern web technologies and best practices.",
      status: "Ongoing",
      tech: ["React", "Cloud Computing", "Software Development", "Python", "PHP"],
      live: "https://www.linkedin.com/in/bhargavi-krishnamurthi-326a68153/details/certifications/"
    },
    // Add more current works/projects
  ];

  return (
    <section id="currentWorks" className="py-20 bg-gradient-to-b from-[#FFF8E1] to-[#E3F2FD]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#1976D2]">
          What I'm Currently doing
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-[#1976D2]">
                  {project.title}
                </h3>
                <span className="px-3 py-1 bg-[#FFF8E1] text-[#FFA000] rounded-full text-sm font-medium">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#1976D2] transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#1976D2] transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentWorks;
