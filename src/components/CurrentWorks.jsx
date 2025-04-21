import { FiExternalLink, FiGithub } from "react-icons/fi";

function CurrentWorks() {
  const currentProjects = [

    {
      title: "Preparing for Aws Cloud Practitioner certification",
      description: "Currently preparing for the AWS Cloud Practitioner certification to enhance my cloud computing skills and knowledge.",
      status: "Ongoing",
      tech: ["AWS", "Cloud Computing"],
      live: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    },
    {
      title: "Preparing for Azure Fundamentals certification",
      description: "Currently preparing for the Azure Fundamentals certification to strengthen my understanding of Microsoft Azure cloud services and database administration.",
      status: "Ongoing",
      tech: ["Azure", "Cloud Computing", "Database Administration"],
      live: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
    },
    {
      title: "Software Engineering Intern",
      description: "Currently working as a Software Engineering Intern at Skygeni, focusing on developing and optimizing web applications.",
      status: "Ongoing",
      tech: ["React", "MongoDB", "Node.js", "Express"],
      live: "https://skygeni.com/"
    },
    {
        title: "Graduate Research Assistant",
        description:"Currently in the development team of a web-based application for wireless network simulations using real-world geographical data by enhancing features along with the sandbox for network creation, NS3-based simulations, and heatmap visualizations.",
        status:"Ongoing",
        tech: ["Python", "Flask", "MySql"],
        live: "https://wttool.eng.buffalo.edu"
    },
    {
      title: "Learning Full Stack Development",
      description: "Currently doing Certifications on advanced concepts in full-stack development, focusing on modern web technologies and best practices.",
      status: "Completed",
      tech: ["React", "Cloud Computing", "Software Development", "Python", "PHP"],
      live: "https://www.linkedin.com/in/bhargavi-krishnamurthi-326a68153/details/certifications/"
    },
    {
      title: "Portfolio Website",
      description: "Building and enhancing my portfolio website using React and Tailwind CSS, implementing responsive design and smooth animations.",
      status: "In Progress",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/Bhargavi-Krish-15/portfolio",
      live: "https://bhargavi-krish-15.github.io/portfolio/"
    },
    // Add more current works/projects
  ];

  return (
    <section id="currentWorks" className="py-20 bg-gradient-to-b from-[#FFF8E1] to-[#E3F2FD]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#1976D2]">
          My latest adventure in the wild world of productivity
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
