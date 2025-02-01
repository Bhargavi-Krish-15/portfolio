function Contact() {
  const contactInfo = [
    {
      type: "Email",
      value: "bhargavikrish@outlook.com",
      hiddenValue: "Email Me",
      link: "mailto:bhargavikrish@outlook.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      type: "Phone",
      value: "+1 (781) 921-7591",
      hiddenValue: "Call Me",
      link: "tel:+17819217591",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      type: "LinkedIn",
      value: "Bhargavi Krishnamurthi",
      hiddenValue: "Connect with me",
      link: "https://www.linkedin.com/in/bhargavi-krishnamurthi-326a68153/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#FFF8E1] to-[#E3F2FD]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#1976D2]">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.type === "LinkedIn" ? "_blank" : "_self"}
              rel={info.type === "LinkedIn" ? "noopener noreferrer" : ""}
              className="group"
            >
              <div className="bg-[#E3F2FD] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center h-[180px] flex flex-col items-center justify-center">
                <div className="text-[#1976D2] group-hover:text-[#FFC107] transition-colors duration-300 flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0D47A1]">{info.type}</h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:opacity-0 absolute">
                  {info.hiddenValue}
                </p>
                <p className="text-[#1976D2] transition-all duration-300 opacity-0 group-hover:opacity-100 absolute">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



export default Contact;
