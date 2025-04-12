import { useState } from "react";
import { FiBook, FiBriefcase, FiCode, FiFolder } from "react-icons/fi";
import Skills from './Skills';

function About() {
  const [activeTab, setActiveTab] = useState("experience");
    const [expandedExp, setExpandedExp] = useState(null);

  const education = [
    {
      title: "Master of Science",
      institution: "State University of New York at Buffalo",
      major: "Computer Science and Engineering",
      start_year: "2023",
      end_year: "2024"
    },
    {
      title: "Bachelor of Engineering ",
      institution: "Anna University",
       major: "Computer Science and Engineering",
      start_year: "2013",
      end_year: "2017"
    },
  ];

  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Skygeni | Remote",
      start_year: "2025",
      end_year: "Present",
      link: "https://skygeni.com/",
      description: [
        "Currently working as a Software Engineering Intern at Skygeni, focusing on developing and optimizing web applications.",
        "Utilized React, Node.js, and MongoDB to build and maintain scalable web applications.",
        "Assisting in enhancing web, mobile, and AI applications, including UI design, test case creation, and SaaS integration using MERN stack"
      ]
    },
    {
      title: "Graduate Research Assistant",
      company: "University at Buffalo | Buffalo, NY, USA",
      start_year: "2025",
      end_year: "Present",
      link: "https://wttool.eng.buffalo.edu/",
      description: [
        "Currently in the development team of a web-based application for wireless network simulations using real-world geographical data by enhancing features along with the sandbox for network creation, NS3-based simulations, and heatmap visualizations.",
        "Utilized Python and Flask for backend development, ensuring efficient data handling and processing.",
        "Debugging application issues, preparing technical documentation, and creating video demos for academic conferences"
      ]
    },
    {
      title: "Software Engineer",
      company: "Juhomi | Chennai, India",
      start_year: "2021",
      end_year:"2023",
      link: "https://www.juhomi.com",
      description: [
      "Program developer: Contributed as a Full-Stack Web Developer for a US-based startup client",
      "Led the development, maintenance, and re-factoring, accounting for 40% of the dynamic web application using Ruby on Rails",
      "Achieved a 5% increase in web traffic and maintained web engagement",
      "Integrated third-party APIs for mailing and data analytics",
      "Collaborated with interdisciplinary team to optimize website performance"
    ]
    },
    {
      title: "Associate Software Engineer",
      company: "Accenture | Chennai, India",
      start_year: "2017",
      end_year:"2019",
      link: "https://www.accenture.com/us-en",
      description: [
      "Manual Tester: Improved SAP EWM system stability by reducing defects by 15%",
      "Performed Unit and Smoke Testing on SAP EWM system components",
      "Utilized SAP MM tools for warehouse management tasks",
      "Prepared test plans and executed end-to-end functional testing",
      "Collaborated with the Automation Testing Team"
    ]
    },
  ];

  const skills = [
    { category: "Tools", items: ["VS Code", "Atom", "Sublime Text", "Git", "Docker"] },
    { category: "Languages", items: ["Ruby on Rails", "Python", "JavaScript", "Java", "C++"] },
    { category: "Frameworks & Libraries", items: ["React", "Django", "Ruby Gems", "Devise"] },
    { category: "Web Development", items: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
    { category: "Platforms & Databases", items: ["AWS", "Heroku", "MySQL", "PostgreSQL"] },
    { category: "Testing Tools", items: ["RSpec", "Capybara", "SAP Testing"] },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#E3F2FD] to-[#FFF8E1]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-[#1976D2] mb-12">About Me</h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === "experience"
                ? "bg-[#1976D2] text-white shadow-lg"
                : "text-[#1976D2] hover:bg-[#1976D2]/10"
            }`}
          >
            <FiBriefcase className="mr-2" /> Experience
          </button>
           <button
            onClick={() => setActiveTab("skills")}
            className={`flex items-center px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === "skills"
                ? "bg-[#1976D2] text-white shadow-lg"
                : "text-[#1976D2] hover:bg-[#1976D2]/10"
            }`}
          >
            <FiCode className="mr-2" /> Skills
          </button>
          <button
            onClick={() => setActiveTab("academics")}
            className={`flex items-center px-6 py-2 rounded-full text-lg font-medium transition-all ${
              activeTab === "academics"
                ? "bg-[#1976D2] text-white shadow-lg"
                : "text-[#1976D2] hover:bg-[#1976D2]/10"
            }`}
          >
            <FiBook className="mr-2" /> Academics
          </button>
          
        </div>

        {/* Content */}
        <div>
          {/* Academics Tab */}
        {activeTab === "academics" && (
            <>
                <h3 className="text-3xl font-bold text-center mb-12 text-[#0D47A1] italic">From textbooks to triumphs (with a pit stop at procrastination)</h3>
                <div className="relative flex flex-col items-start space-y-16 max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <div key={index} className="relative flex items-start gap-8">
                        {/* Timeline */}
                        <div className="flex flex-col items-center">
                            {/* End Year */}
                            <span className="text-sm font-semibold text-[#0D47A1] mb-2">{edu.end_year}</span>
                            {/* Circle */}
                            <div className="w-[12px] h-[12px] rounded-full bg-[#FFC107] ring-4 ring-[#FFF8E1]"></div>
                            {/* Line */}
                            {/* {index !== education.length - 1 && ( */}
                            <div className="w-[2px] h-24 bg-[#FFC107]"></div>
                            {/* )} */}
                            <span className="text-sm font-semibold text-[#0D47A1] mb-2">{edu.start_year}</span>
                            {/* Start Year */}
                            {/* {index === education.length - 1 && (
                            <span className="text-sm font-semibold text-[#0D47A1] mt-2">{edu.start_year}</span>
                            )} */}
                        </div>

                        {/* Education Details */}
                        <div className="relative size-150 top-10">
                            <h4 className="text-2xl font-bold text-[#1976D2]">{edu.institution}</h4>
                            <p className="text-lg text-gray-500">{edu.major}</p>
                            <p className="text-xl text-gray-700">{edu.title}</p>
                            {/* <p className="text-gray-500">
                            {edu.start_year} - {edu.end_year}
                            </p> */}
                        </div>
                    </div>
                ))}
            </div>
            </>
        )}


        {/* Experience Tab */}
           {activeTab === "experience" && (
        <>
            <h3 className="text-3xl font-bold text-center mb-12 text-[#0D47A1] italic">
            Experiences I've Gained and Lessons I'm Still Figuring Out
            </h3>
            <div className="relative flex flex-col items-start space-y-16 max-w-4xl mx-auto">
            {experience.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-semibold text-[#0D47A1] mb-2">
                        {exp.end_year}
                        </span>
                        <div className="w-[12px] h-[12px] rounded-full bg-[#FFC107] ring-4 ring-[#FFF8E1]"></div>
                        <div className="w-[2px] h-24 bg-[#FFC107]"></div>
                        <span className="text-sm font-semibold text-[#0D47A1] mb-2">
                        {exp.start_year}
                        </span>
                    </div>
                
                <div className="relative size-150 top-10">
                        <button 
                            onClick={() => setExpandedExp(expandedExp === index ? null : index)}
                            className="text-left hover:opacity-80 transition-opacity w-full"
                        >
                            <div className="group hover:bg-[#FFF8E1] p-2 rounded-lg transition-all duration-300">
                                <h4 className="text-2xl font-bold text-[#1976D2] group-hover:text-[#FFA000] transition-colors">
                                    {exp.company}
                                </h4>
                                <p className="text-lg text-gray-500 group-hover:text-[#1976D2] transition-colors">
                                    {exp.title}
                                </p>
                            </div>
                        </button>
                        
                        {expandedExp === index && (
                            <div className="mt-4 pl-4 border-l-2 border-[#FFC107]">
                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-700">• {item}</li>
                                    ))}
                                    <li>• <a 
                                        href={exp.link} 
                                        className="text-[#1976D2] hover:text-[#FFA000] transition-colors"
                                    >
                                        Company site
                                    </a></li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>
            ))}
            </div>
        </>
        )}
 

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <>
              {/* <h3 className="text-3xl font-bold text-center mb-8 text-[#0D47A1]">Things I learned ..</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-4">{skill.category}</h4>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-gray-700">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div> */}
              {/* <a href="#projects" className="text-[#1976D2] hover:text-[#FFA000] text-2xl transition-colors absolute right-20">
                            <FiFolder />
              </a> */}
              <a 
                href="#projects" 
                className="group flex flex-col items-center text-[#1976D2] hover:text-[#FFA000] transition-colors absolute right-20"
                >
                <FiFolder className="text-2xl" />
                <span className="absolute top-8 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Projects
                </span>
                </a>
                <skills />
            </>
          )
          }
        </div>
      </div>
    </section>
  );
}

export default About;


// function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-3xl">
//         <h2 className="text-4xl font-bold mb-8 text-center text-[#6C63FF]">
//           Education
//         </h2>
        
//         <div className="bg-white rounded-3xl shadow-lg p-6">
//           <div className="space-y-6">
//             <div className="grid grid-cols-3 gap-4 rounded-2xl transition-shadow overflow-hidden hover:shadow-lg">
//               <div className="col-span-2 p-4">
//                 <h4 className="text-2xl font-medium text-[#6C63FF]">Master of Science in Computer Science</h4>
//                 <p className="text-gray-700">State University of New York at Buffalo</p>
//                 <p className="text-gray-500">2023 - 2024</p>
//               </div>
//               <div 
//                 className="h-[150px] rounded-r-2xl"
//                 style={{
//                   backgroundImage: 'url("/src/assets/ub_bg.png")',
//                   backgroundSize: 'contain',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat'
//                 }}
//               />
//             </div>
            
//             <div className="grid grid-cols-3 gap-4 rounded-2xl transition-shadow overflow-hidden hover:shadow-lg">
//               <div className="col-span-2 p-4">
//                 <h4 className="text-2xl font-medium text-[#6C63FF]">Bachelor of Engineering in Computer Science</h4>
//                 <p className="text-gray-700">Anna University</p>
//                 <p className="text-gray-500">2015 - 2019</p>
//               </div>
//               <div 
//                 className="h-[150px] rounded-r-2xl"
//                 style={{
//                   backgroundImage: 'url("/src/assets/au_bg.png")',
//                   backgroundSize: 'contain',
//                   backgroundPosition: 'center',
//                   backgroundRepeat: 'no-repeat'
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;