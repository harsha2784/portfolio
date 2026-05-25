import { useEffect, useState } from "react";

import axios from "axios";

function ProjectList({ manage }) {

  const [p, setP] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/projects"
      );

      setP(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const del = async (id) => {

    const pass = prompt(
      "Enter Password"
    );

    if (pass !== "1234") {

      alert("Wrong Password");

      return;
    }

    try {

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`
      );

      alert("Project Deleted");

      getProjects();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div id="projects">

      <h2 className="section-title">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {p.map((i) => (

          <div
            key={i._id}
            className="glass rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] transition duration-500"
          >

            {/* IMAGE */}

            {i.image && (

              <div className="overflow-hidden relative">

                <img
                  src={i.image}
                  alt={i.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-700"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>
            )}

            {/* CONTENT */}

            <div className="p-7">

              {/* TOP LINE */}

              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 mb-6" />

              {/* TITLE */}

              <h3 className="text-3xl font-bold leading-tight">

                {i.title}

              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 text-gray-300 leading-relaxed">

                {i.description}

              </p>

              {/* TECH */}

              <div className="mt-5 flex flex-wrap gap-3">

                {i.tech
                  ?.split(",")
                  .map((t, index) => (

                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 text-sm text-cyan-300 border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
              </div>

              {/* BUTTONS */}

              <div className="flex gap-4 mt-8 flex-wrap">

                {i.github && (

                  <a
                    href={i.github}
                    target="_blank"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 font-semibold hover:scale-105 transition"
                  >
                    GitHub
                  </a>
                )}

                {i.live && (

                  <a
                    href={i.live}
                    target="_blank"
                    className="glass px-5 py-3 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    Live Demo
                  </a>
                )}

                {manage && (

                  <button
                    onClick={() =>
                      del(i._id)
                    }
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 font-semibold hover:scale-105 transition"
                  >
                    Delete
                  </button>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ProjectList;