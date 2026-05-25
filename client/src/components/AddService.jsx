import { useState } from "react";

import axios from "axios";

function AddService() {

  const [pass, setPass] =
    useState("");

  const [f, setF] = useState({
    title: "",
    desc: "",
  });

  const change = (e) => {

    setF({
      ...f,
      [e.target.name]:
        e.target.value,
    });
  };

  const add = async () => {

    if (pass !== "1234") {

      alert("Wrong Password");

      return;
    }

    try {

      await axios.post(
        "https://portfolio-server-3rhw.onrender.com/api/services",
        f
      );

      alert(
        "Service Added Successfully"
      );

      setF({
        title: "",
        desc: "",
      });

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="glass rounded-3xl p-10 mb-20">

      <h2 className="text-4xl font-black mb-8">

        Add Service

      </h2>

      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) =>
          setPass(e.target.value)
        }
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none text-white"
      />

      <input
        type="text"
        placeholder="Service Title"
        name="title"
        value={f.title}
        onChange={change}
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none text-white"
      />

      <textarea
        placeholder="Description"
        name="desc"
        rows="5"
        value={f.desc}
        onChange={change}
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 outline-none text-white resize-none"
      />

      <button
        onClick={add}
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 font-bold hover:scale-105 transition"
      >
        Add Service
      </button>

    </div>
  );
}

export default AddService;