import { useState } from "react";
import axios from "axios";

function AddCertificate() {

  const [pass, setPass] = useState("");

  const [img, setImg] = useState(null);

  const [f, setF] = useState({
    title: "",
    organization: "",
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
        "http://localhost:5000/api/certificates",
        {
          ...f,
          image: imageUrl,
        }
      );

      alert(
        "Certificate Added Successfully"
      );

      setF({
        title: "",
        organization: "",
      });

      setImg(null);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="p-10">

      <h2 className="text-4xl font-bold mb-10">
        Add Certificate
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
        placeholder="Certificate Title"
        name="title"
        className="border p-3 w-full mb-4"
        value={f.title}
        onChange={change}
      />

      <input
        type="text"
        placeholder="Organization"
        name="organization"
        className="border p-3 w-full mb-4"
        value={f.organization}
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
        Add Certificate
      </button>

    </div>
  );
}

export default AddCertificate;