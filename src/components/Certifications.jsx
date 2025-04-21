import React from 'react';
import { FiAward } from 'react-icons/fi';
function Certifications() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#E3F2FD] to-[#FFF8E1]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#1976D2] to-[#FFC107] bg-clip-text text-transparent italic">
          Credentialed and caffeinated for success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">IBM Full Stack Software Developer</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Programming Languages', 'Fundamentals'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/professional-cert/certificate/JWJE04G5V899"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    {/* <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg> */}
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Full Stack Software Developer Assessment</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Programming Languages', 'Fundamentals'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/verify/13LN05CGQ8LC"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
        </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Introduction to Software Engineering</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Software Development LifeCycle', 'Software Architecture', 'Software Stack', 'Development Tools', 'Basics of Programming'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/0LXTYULZNE7D"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Introduction to Programming Using Python</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {[ 'Fundamentals of Python'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://members.codewithmosh.com/courses/417695/certificate"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Introduction to HTML, CSS, & JavaScript</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['HTML5', 'CSS3', 'SASS', 'jQuery', 'Hot Wire', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/K08DPARFBHXQ"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Introduction to Cloud Computing</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Cloud Service Providers', 'Cloud Adoptions', 'IOT', 'Cloud Service Models', 'Cloud Infrastructure'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/U2U31ECU8T22"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Git and GitHub</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['GitHub', 'Git'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/BSLOEKT26YMC"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Developing Front-End Apps with React</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'React Hooks', 'Redux'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/UJRFDTWDRNUC"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Python for Data Science, AI & Development</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Python', 'Numpy', 'Pandas', 'DataScience', 'Data Analysis'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/GRTR4YLS1KQB"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

         <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Introduction to Containers w/ Docker, Kubernetes & OpenShift</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Kubernetes', 'Docker', 'Open Shift', 'Containers'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/verify/3PGJOAZ7CWPF"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

         <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Django Application Development with SQL and Databases</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Sql', 'Databases', 'ORM'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/FEKIHNBU2RS8"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Developing Back-End Apps with Node.js and Express</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Node.js', 'Express.js', 'Postman API', 'Rest API'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/verify/U4SU190JU28W"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Developing AI Applications with Python and Flask</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Python', 'Flask'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/LMQD4RX8GHM7"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Application Development using Microservices and Serverless </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Micorservices', 'Serverless DB'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#E3F2FD] text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
                    <a 
                    href={"https://www.coursera.org/account/accomplishments/records/4ET4Z47HGJN9"}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-[#1976D2] text-white rounded-lg hover:bg-[#1565C0] transition-colors"
                  >
                    < FiAward className="w-5 h-5 mr-2" />
                    Certificate
                  </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Certifications;