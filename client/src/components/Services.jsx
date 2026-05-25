import { useEffect, useState } from "react";

import axios from "axios";

function Services({ manage }) {

  const [s, setS] = useState([]);

  const colors = [

    "from-cyan-500 to-blue-500",

    "from-violet-500 to-purple-500",

    "from-pink-500 to-rose-500",

    "from-emerald-500 to-teal-500",

    "from-orange-500 to-yellow-500",
  ];

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/services"
      );

      setS(res.data);

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
        `http://localhost:5000/api/services/${id}`
      );

      alert("Service Deleted");

      getServices();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div id="services">

      <h2 className="section-title">
        Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {s.map((i, index) => (

          <div
            key={i._id}
            className="glass rounded-3xl p-[1px] hover:scale-[1.03] transition duration-300 glow"
          >

            <div className="bg-[#0b1120]/90 rounded-3xl p-8 h-full">

              {/* TOP LINE */}

              <div
                className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${
                  colors[
                    index %
                      colors.length
                  ]
                }`}
              />

              {/* TITLE */}

              <h3 className="text-3xl font-bold mt-8">

                {i.title}

              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 text-gray-300 leading-relaxed text-lg">

                {i.desc}

              </p>

              {/* DELETE */}

              {manage && (

                <button
                  onClick={() =>
                    del(i._id)
                  }
                  className="mt-8 px-5 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 font-semibold hover:scale-105 transition"
                >
                  Delete
                </button>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;