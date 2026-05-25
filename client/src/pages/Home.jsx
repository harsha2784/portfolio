import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

import ProjectList from "../components/ProjectList";

import Services from "../components/Services";

import CertificateList from "../components/CertificateList";

import Contact from "../components/Contact";

function Home() {

  const [h, setH] = useState({
    name: "",
    role: "",
    desc: "",
    image: "",
  });

  useEffect(() => {
    getHome();
  }, []);

  const getHome = async () => {

    try {

      const res = await axios.get(
        "https://portfolio-server-3rhw.onrender.com/api/home"
      );

      if (res.data) {
        setH(res.data);
      }

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen text-white relative">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* HERO SECTION */}

        <section className="min-h-screen flex items-center">

          <div className="grid lg:grid-cols-2 gap-20 items-center w-full">

            {/* LEFT SIDE */}

            <div>

              <div className="inline-block px-5 py-2 rounded-full glass mb-8">

                <p className="text-cyan-300 tracking-[4px] uppercase text-sm font-semibold">

                  PORTFOLIO

                </p>

              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">

                {h.name}

              </h1>

              <h2 className="mt-6 text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">

                {h.role}

              </h2>

              <p className="mt-10 text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl">

                {h.desc}

              </p>

              <div className="flex flex-wrap gap-6 mt-12">

                <a
                  href="#projects"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 font-semibold text-lg hover:scale-105 transition shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="glass px-8 py-4 rounded-2xl text-lg font-semibold hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  Contact Me
                </a>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="flex justify-center">

              {h.image && (

                <div className="relative">

                  {/* OUTER GLOW */}

                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 rounded-[40px] blur-2xl opacity-40 scale-105" />

                  {/* IMAGE */}

                  <img
                    src={h.image}
                    alt={h.name}
                    className="relative w-[320px] md:w-[420px] h-[420px] object-cover rounded-[40px] border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                  />

                </div>
              )}

            </div>

          </div>

        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="py-28"
        >
          <ProjectList />
        </section>

        {/* SERVICES */}

        <section
          id="services"
          className="py-28"
        >
          <Services />
        </section>

        {/* CERTIFICATES */}

        <section
          id="certificates"
          className="py-28"
        >
          <CertificateList />
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="py-28"
        >
          <Contact />
        </section>

      </div>

    </div>
  );
}

export default Home;