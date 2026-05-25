function Navbar() {

  return (

    <div className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">

        <div className="glass rounded-2xl px-8 py-5 flex justify-between items-center shadow-[0_0_30px_rgba(0,0,0,0.25)]">

          {/* LOGO */}

          <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">

            Harsha Portfolio

          </h1>

          {/* NAV LINKS */}

          <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

            <a
              href="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#services"
              className="hover:text-cyan-400 transition"
            >
              Services
            </a>

            <a
              href="#certificates"
              className="hover:text-cyan-400 transition"
            >
              Certificates
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;