function Projects() {
  const projects = [
    {
      title: "Java Play Store Clone with Fake Review Detection",
      description: "Developed a virtual Play Store platform to enhance user trust by filtering out fake reviews. Implemented a custom algorithm for fake review detection using keyword analysis and text pattern recognition.",
      tech: ["Java SE", "MySQL"],
      github: "https://github.com/Bhargavi-Krish-15?tab=repositories",
    },
    {
      title: "Machine Learning Crime Prediction Application",
      description: "Developed a predictive analytics web application to forecast crime trends based on geographical data. Enabled users to search for crime types by area and time, enhancing public safety awareness.",
      tech: ["Streamlit", "scikit-learn", "Python"],
      github: "https://github.com/Bhargavi-Krish-15?tab=repositories",
    },
    {
      title: "React Financial Data Visualization Dashboard",
      description: "Developed a responsive financial dashboard to visualize Apple Inc.'s annual income statements using Financial Modeling Prep API, featuring dynamic filtering and sorting capabilities for various financial metrics and performance indicators.",
      tech: ["React JS", "Tailwind CSS"],
      github: "https://github.com/Bhargavi-Krish-15/FinanceTable",
      demo: "https://finance-table.vercel.app/",
    },
    {
      title: "Operating Systems and Database Systems Projects",
      description: "Implemented core operating system concepts such as memory management, process scheduling and database management, passing test cases for functionality and performances.",
      tech: ["C++", "Docker"],
      github: "https://github.com/wendanzhao/UB-CSE562-TacoDB",
    },
    {
      title: "C++ Client-Server Text Chat Application",
      description: "Engineered a text chat application to facilitate real-time communication between multiple clients.",
      tech: ["C++", "TCP/IP sockets"],
      github: "https://github.com/UB-CSE4589/pa1-jjjeong-bkrishna",
    },
    {
      title: "Hotel Management System",
      description: "Created a comprehensive hotel management application to streamline booking and guest management. Designed user interfaces for room reservation, guest information management, and billing functionalities.",
      tech: ["Python", "Django"],
      github: "https://github.com/Bhargavi-Krish-15/Hotel-site",
    },
    {
      title: "Crud Application",
      description: "Engineered a full-stack social media application implementing CRUD operations with user authentication, real-time post creation, image uploads, commenting system, and user following functionality ",
      tech: ["Ruby", "Rails"],
      github: "https://github.com/Bhargavi-Krish-15/Employee_app",  
    },
    {
      title: "Hands-On Beginnings",
      description: "Developed a hands-on learning platform for beginners in programming, featuring interactive tutorials and coding challenges.",
      tech: ["HTML", "CSS", "JavaScript", "Mern Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "swagger", "Postman", "kubernetes", "Docker","Git","Orm"],
      github: "https://github.com/Bhargavi-Krish-15?tab=repositories",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#E3F2FD] to-[#FFF8E1]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#1976D2]">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#E3F2FD] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-[#1976D2]">{project.title}</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-white text-[#1976D2] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#FFC107] text-[#1976D2] rounded-lg hover:bg-[#FFB300] transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
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


export default Projects;
