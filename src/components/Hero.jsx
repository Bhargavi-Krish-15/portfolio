// function Hero() {
//   const handleDownload = async () => {
//     try {
//       const response = await fetch("/src/assets/resume_bk_2025.pdf");
//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "Bhargavi_Krishnamurthi_Resume.pdf";
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Error downloading resume:", error);
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="h-screen flex items-center justify-center bg-gradient-to-b from-slate-800 to-gray-900"
//     >
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-gray rounded-2xl shadow-lg p-8 m-4 transition-all duration-300 hover:shadow-xl">
//           <div className="flex flex-col items-center">
//             <div className="mb-6 relative">
//               <div className="absolute inset-0 bg-blue-100 rounded-full blur-md transform -translate-y-1"></div>
//               <img
//                 src="/src/assets/bhargavi.png"
//                 alt="Bhargavi Krishnamurthi"
//                 className="w-[150px] h-[150px] relative z-10 rounded-full border-4 border-white shadow-md"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>

//             <div className="text-center">
//               <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//                 Bhargavi Krishnamurthi
//               </h1>

//               <div className="flex items-center justify-center gap-3 mb-4">
//                 <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
//                   Full Stack Developer
//                 </span>
//                 <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
//                   MS Computer Science
//                 </span>
//               </div>

//               <p className="text-lg text-gray-600 mb-6 max-w-2xl leading-relaxed italic">
//                 Recent Computer Science graduate from SUNY Buffalo, combining
//                 theoretical knowledge with practical experience in full-stack
//                 development. Actively seeking software engineering opportunities
//                 to contribute to innovative projects.
//               </p>

//               {/* <div className="flex justify-center gap-6 mb-6 text-gray-600">
//                 <a
//                   href="mailto:bhargavikrish@outlook.com"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                   📧 Email
//                 </a>
//                 <a
//                   href="tel:+17819217591"
//                   className="hover:text-blue-600 transition-colors"
//                 >
//                   📱 +1 (781) 921-7591
//                 </a>
//                 <span>📍 Buffalo, NY</span>
//               </div> */}

//               <button
//                 onClick={handleDownload}
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md transform hover:scale-105"
//               >
//                 Download Resume
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


function Hero() {
  const handleDownload = async () => {
    try {
      const response = await fetch("assets/resume_bk_2025.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Bhargavi_Krishnamurthi_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FFF8E1] to-[#E3F2FD] flex items-center relative overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFE082] rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#90CAF9] rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#BBDEFB] rounded-full opacity-10"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        {/* Left Content */}
        <div className="text-left max-w-xl z-10">
          <h1 className="text-[#1565C0] text-6xl font-bold mb-4">
            Hello, I'm<br />
            <span className="text-[#0D47A1]">Bhargavi Krishnamurthi</span>
          </h1>
          <p className="text-[#FFA000] uppercase tracking-wider text-sm font-semibold mb-6">
            Full-Stack and App Developer
          </p>
          <p className="text-gray-700 text-lg mb-8">
            Computer Science graduate from SUNY Buffalo.<br />
            Practical experience in Full-Stack Development and SAP Testing.
          </p>
          <div className="flex gap-4 mb-8">
            {/* <button className="bg-[#1976D2] text-white px-8 py-3 rounded-lg hover:bg-[#1565C0] transition-all">
              Contact Me
            </button> */}
            
            <button
              onClick={handleDownload}
              className="bg-[#FFC107] text-[#0D47A1] px-8 py-3 rounded-lg hover:bg-[#FFB300] transition-all font-medium"
            >
              Download CV
            </button>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com" className="text-[#1976D2] hover:text-[#FFC107] transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com" className="text-[#1976D2] hover:text-[#FFC107] transition-colors">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="w-[400px] h-[400px] bg-[#FFE082] rounded-full overflow-hidden shadow-lg relative z-10">
            <img
              src="assets/bhargavi.png"
              alt="Bhargavi Krishnamurthi"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Badges */}
          {/* <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-lg shadow-md z-20">
            <div className="flex items-center gap-2">
              <span className="text-[#1976D2] text-2xl font-bold">4</span>
              <span className="text-gray-600 text-sm">Years<br/>Experience</span>
            </div>
          </div> */}
          
          <div className="absolute bottom-10 -right-4 bg-white px-4 py-2 rounded-lg shadow-md z-20">
            <div className="flex items-center gap-2">
              <span className="text-[#1976D2] text-2xl font-bold">4</span>
              <span className="text-gray-600 text-sm">Years<br/>Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Hero;
