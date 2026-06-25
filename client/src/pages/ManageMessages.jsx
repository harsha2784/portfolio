import { useEffect, useState } from "react";
import axios from "axios";

function ManageMessages() {

  const [messages, setMessages] =
    useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {

    try {

      const res = await axios.get(
        "https://portfolio-server-3rhw.onrender.com/api/messages"
      );

      setMessages(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteMessage = async (
    id
  ) => {

    const ok = window.confirm(
      "Delete this message?"
    );

    if (!ok) return;

    try {

      await axios.delete(
        `https://portfolio-server-3rhw.onrender.com/api/messages/${id}`
      );

      getMessages();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen text-white p-10">

      <h1 className="text-4xl font-bold mb-10">

        Messages Dashboard

      </h1>

      <p className="mb-8 text-xl">

        Total Messages:
        {" "}
        {messages.length}

      </p>

      <div className="space-y-6">

        {messages.map((m) => (

          <div
            key={m._id}
            className="glass p-6 rounded-3xl"
          >

            <h3 className="text-2xl font-bold">

              {m.name}

            </h3>

            <p className="text-cyan-300">

              {m.email}

            </p>

            <p className="text-gray-400 mt-2">

              {new Date(
                m.createdAt
              ).toLocaleString()}
            </p>

            <p className="mt-5">

              {m.message}

            </p>

            <button
              onClick={() =>
                deleteMessage(
                  m._id
                )
              }
              className="mt-5 px-5 py-2 rounded-xl bg-red-500"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ManageMessages;