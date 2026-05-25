import { useEffect, useState } from "react";

import axios from "axios";

function CertificateList({ manage }) {

  const [c, setC] = useState([]);

  useEffect(() => {
    getCertificates();
  }, []);

  const getCertificates = async () => {

    try {

      const res = await axios.get(
        "https://portfolio-server-3rhw.onrender.com/api/certificates"
      );

      setC(res.data);

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
        `https://portfolio-server-3rhw.onrender.com/api/certificates/${id}`
      );

      alert(
        "Certificate Deleted"
      );

      getCertificates();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div id="certificates">

      <h2 className="section-title">
        Certificates
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {c.map((i) => (

          <div
            key={i._id}
            className="glass rounded-3xl overflow-hidden hover:scale-[1.03] transition duration-300 glow"
          >

            {/* IMAGE */}

            {i.image && (

              <div className="overflow-hidden">

                <img
                  src={i.image}
                  alt={i.title}
                  className="w-full h-60 object-cover hover:scale-110 transition duration-500"
                />

              </div>
            )}

            {/* CONTENT */}

            <div className="p-7">

              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 mb-6" />

              <h3 className="text-2xl font-bold">

                {i.title}

              </h3>

              <p className="mt-4 text-gray-300 text-lg">

                {i.organization}

              </p>

              {/* DELETE BUTTON */}

              {manage && (

                <button
                  onClick={() =>
                    del(i._id)
                  }
                  className="mt-6 bg-gradient-to-r from-red-500 to-pink-500 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
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

export default CertificateList;