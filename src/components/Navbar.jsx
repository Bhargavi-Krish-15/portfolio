// function Navbar() {
//   return (
//     <nav className="fixed w-full bg-gradient-to-b from-slate-800 to-gray-900 backdrop-blur-sm shadow-lg z-50">
//         {/* bg-white/90 */}
//       <div className="container mx-auto px-6 py-2">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <img 
//               src="/src/assets/bhargavi_logo.png"
//               alt="Bhargavi Logo" 
//               className="w-12 h-12 rounded-full border-2 border-blue-100 hover:scale-105 transition-transform cursor-pointer"
//             />
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {['Home', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="relative font-medium bg-gradient-to-r from-[#4B5EFC] to-[#8C3FE8] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300 py-2 group text-lg"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4B5EFC] to-[#8C3FE8] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// export default Navbar;

import { FiHome, FiUser, FiMail } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="absolute w-full bg-transparent z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: BK Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#FFA000] cursor-pointer">
              BK
            </span>
          </div>

          {/* Right: Navigation Icons */}
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-[#1976D2] hover:text-[#FFA000] text-2xl transition-colors">
              <FiHome />
            </a>
            <a href="#about" className="text-[#1976D2] hover:text-[#FFA000] text-2xl transition-colors">
              <FiUser />
            </a>
            <a href="#contact" className="text-[#1976D2] hover:text-[#FFA000] text-2xl transition-colors">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



