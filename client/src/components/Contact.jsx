import { useState } from "react";
import axios from "axios";

function Contact() {
  const [f, setF] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] =
    useState(false);

  const change = (e) => {
    setF({
      ...f,
      [e.target.name]:
        e.target.value,
    });
  };

  const send = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "https://portfolio-server-3rhw.onrender.com/api/messages",
        f
      );

      console.log(
        "SERVER RESPONSE:",
        res.data
      );

      alert(
        "Message Sent Successfully"
      );

      setF({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(
        "CLIENT ERROR:"
      );

      console.log(error);

      alert(
        error?.response?.data?.msg ||
          "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <h2 className="section-title">
        Contact
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}

        <div className="mt-10 space-y-6 text-lg">
          <p className="text-gray-300">
            <span className="text-cyan-300 font-semibold">
              Email:
            </span>{" "}
            harshavardhansreddy1305@example.com
          </p>

          <div>
            <span className="text-cyan-300 font-semibold">
              LinkedIn:
            </span>

            <br />

            <a
              href="https://www.linkedin.com/in/soma-harshavardhan-reddy-348a0928b"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition break-all"
            >
              www.linkedin.com/in/soma-harshavardhan-reddy-348a0928b
            </a>
          </div>

          <div>
            <span className="text-cyan-300 font-semibold">
              GitHub:
            </span>

            <br />

            <a
              href="https://github.com/harsha2784"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-cyan-300 transition break-all"
            >
              github.com/harsha2784
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="glass rounded-3xl p-10 glow">
          <h3 className="text-3xl font-bold mb-8">
            Send Message
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={f.name}
            onChange={change}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none focus:border-cyan-400 text-white"
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={f.email}
            onChange={change}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-5 outline-none focus:border-cyan-400 text-white"
          />

          <textarea
            placeholder="Message"
            name="message"
            rows="6"
            value={f.message}
            onChange={change}
            className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 outline-none focus:border-cyan-400 text-white resize-none"
          />

          <button
            onClick={send}
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-lg font-bold hover:scale-[1.02] transition duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;