import { useEffect, useState } from "react";

import axios from "axios";

function AddHome() {

  const [pass, setPass] =
    useState("");

  const [img, setImg] =
    useState(null);

  const [f, setF] =
    useState({
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
        setF(res.data);
      }

    } catch (error) {

      console.log(error);
    }
  };

  const change = (e) => {

    setF({
      ...f,
      [e.target.name]:
        e.target.value,
    });
  };

  const uploadImage =
    async () => {

      if (!img)
        return f.image;

      const data =
        new FormData();

      data.append(
        "file",
        img
      );

      try {

        const res =
          await axios.post(
            "https://portfolio-server-3rhw.onrender.com/api/upload",
            data
          );

        return res.data.imageUrl;

      } catch (error) {

        console.log(error);
      }
    };

  const save = async () => {

    if (pass !== "1234") {

      alert("Wrong Password");

      return;
    }

    try {

      const imageUrl =
        await uploadImage();

      await axios.post(
        "https://portfolio-server-3rhw.onrender.com/api/home",
        {
          ...f,
          image: imageUrl,
        }
      );

      alert(
        "Home Updated Successfully"
      );

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="glass rounded-3xl p-10">

      <h2 className="text-4xl font-black mb-8">

        Manage Home

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
        placeholder="Name"
        name="name"
        value={f.name}
        onChange={change}
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none text-white"
      />

      <input
        type="text"
        placeholder="Role"
        name="role"
        value={f.role}
        onChange={change}
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none text-white"
      />

      <textarea
        placeholder="Description"
        name="desc"
        rows="6"
        value={f.desc}
        onChange={change}
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none text-white resize-none"
      />

      <input
        type="file"
        accept="image/*"
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-white"
        onChange={(e) =>
          setImg(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={save}
        className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 font-bold hover:scale-105 transition"
      >
        Save Home Content
      </button>

    </div>
  );
}

export default AddHome;