// function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#4B5EFC] to-[#8C3FE8] bg-clip-text text-transparent">
//           Technical Skills
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-bold mb-4 text-[#4B5EFC]">Languages</h3>
//             <div className="flex flex-wrap gap-2">
//               {['Ruby on Rails', 'Python', 'JavaScript', 'Java', 'C++', 'React', 'Django', 'PHP'].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-bold mb-4 text-[#4B5EFC]">Frameworks & Libraries</h3>
//             <div className="flex flex-wrap gap-2">
//               {['Ruby Gems', 'Active Record', 'Active Storage', 'Web packer', 'Devise', 'Action Controller', 'Rspec', 'Sinatra', 'Sidekiq', 'Puma'].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-bold mb-4 text-[#4B5EFC]">Web Development</h3>
//             <div className="flex flex-wrap gap-2">
//               {['HTML5', 'CSS3', 'SASS', 'jQuery', 'Hot Wire', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-bold mb-4 text-[#4B5EFC]">Tools & Development</h3>
//             <div className="flex flex-wrap gap-2">
//               {['VS Code', 'Git', 'Docker', 'Vagrant', 'Apache Server', 'Bundler'].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-bold mb-4 text-[#4B5EFC]">Platforms & Databases</h3>
//             <div className="flex flex-wrap gap-2">
//               {['AWS', 'GitHub', 'Heroku', 'Engine Yard', 'Mail Gun', 'MySQL', 'SQLite', 'PostgreSQL'].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//             <h3 className="text-xl font-bold mb-4 text-[#4B5EFC]">Testing & Other</h3>
//             <div className="flex flex-wrap gap-2">
//               {['Rspec', 'Capybara', 'SAP-EWM', 'SAP-BI', 'SAP-MM', 'JIRA', 'Linux/Ubuntu'].map((skill) => (
//                 <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#FFF8E1] to-[#E3F2FD]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#1976D2] to-[#FFC107] bg-clip-text text-transparent italic">
          Skills I've Dabbled In (and survived to tell the tale)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Ruby on Rails', 'Python', 'JavaScript', 'Java', 'C++', 'React', 'Django', 'PHP', 'MERN'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/90 text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {[ 'Node.js', 'Express.js','Ruby Gems', 'Active Record', 'Active Storage', 'Web packer', 'Devise', 'Action Controller', 'Rspec', 'Sinatra', 'Sidekiq', 'Puma'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/90 text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Web Development</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'SASS', 'jQuery', 'Hot Wire', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/90 text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Tools & Development</h3>
            <div className="flex flex-wrap gap-2">
              {['VS Code', 'Git', 'Docker', 'Vagrant', 'Apache Server', 'Bundler'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/90 text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Platforms & Databases</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'GitHub', 'Heroku', 'Engine Yard', 'Mail Gun', 'MySQL', 'SQLite', 'PostgreSQL'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/90 text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-[#1976D2]">Testing & Other</h3>
            <div className="flex flex-wrap gap-2">
              {['Rspec', 'Capybara', 'SAP-EWM', 'SAP-BI', 'SAP-MM', 'JIRA', 'Linux/Ubuntu'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-white/90 text-[#1976D2] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;