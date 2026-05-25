import { useState } from "react";
import axios from "axios";

function AddProject() {

  const [pass, setPass] = useState("");

  const [img, setImg] = useState(null);

  const [f, setF] = useState({
    title: "",
    description: "",
    tech: "",
    github: "",
    live: "",
  });

  const change = (e) => {
    setF({
      ...f,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = async () => {

    const data = new FormData();

    data.append("file", img);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        data
      );

      return res.data.imageUrl;

    } catch (error) {
      console.log(error);
    }
  };

  const add = async () => {

    if (pass !== "1234") {
      alert("Wrong Password");
      return;
    }

    try {

      const imageUrl =
        await uploadImage();

      await axios.post(
        "http://localhost:5000/api/projects",
        {
          ...f,
          image: imageUrl,
        }
      );

      alert(
        "Project Added Successfully"
      );

      setF({
        title: "",
        description: "",
        tech: "",
        github: "",
        live: "",
      });

      setImg(null);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-20 border p-6 rounded-xl">

      <h2 className="text-3xl font-bold mb-6">
        Add Project
      </h2>

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full mb-4"
        value={pass}
        onChange={(e) =>
          setPass(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Title"
        name="title"
        className="border p-3 w-full mb-4"
        value={f.title}
        onChange={change}
      />

      <textarea
        placeholder="Description"
        name="description"
        className="border p-3 w-full mb-4"
        value={f.description}
        onChange={change}
      />

      <input
        type="text"
        placeholder="Tech Stack"
        name="tech"
        className="border p-3 w-full mb-4"
        value={f.tech}
        onChange={change}
      />

      <input
        type="text"
        placeholder="GitHub Link"
        name="github"
        className="border p-3 w-full mb-4"
        value={f.github}
        onChange={change}
      />

      <input
        type="text"
        placeholder="Live Link"
        name="live"
        className="border p-3 w-full mb-4"
        value={f.live}
        onChange={change}
      />

      <input
        type="file"
        accept="image/*"
        className="border p-3 w-full mb-4"
        onChange={(e) =>
          setImg(e.target.files[0])
        }
      />

      <button
        onClick={add}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Add Project
      </button>

    </div>
  );
}

export default AddProject;