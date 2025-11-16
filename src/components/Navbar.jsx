export default function Navbar() {
    return (
      <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-lg font-bold tracking-tight">
            <div className="bg-white text-black w-8 h-8 rounded-lg flex items-center justify-center">
              TG
            </div>
          </div>
  
          {/* Nav links */}
          <div className="hidden md:flex gap-10 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">01. About</a>
            <a href="#experience" className="hover:text-white">02. Experience</a>
            <a href="#projects" className="hover:text-white">03. Projects</a>
            <a href="#contact" className="hover:text-white">04. Contact</a>
          </div>
  
          {/* Resume button */}
          <div>
            <a
              href="/Tejaswi_Ganji_DA_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200"

            >
            <a
/>

              Resume
            </a>
          </div>
        </nav>
      </header>
    );
  }
  