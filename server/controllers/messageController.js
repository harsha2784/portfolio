import Message from "../models/Message.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const addMessage = async (
  req,
  res
) => {
  try {

    const { name, email, message } =
      req.body;

    console.log(
      "Received Message:",
      {
        name,
        email,
      }
    );

    const m =
      await Message.create({
        name,
        email,
        message,
      });

    console.log(
      "Message saved to MongoDB"
    );

    const info =
      await transporter.sendMail({
        from: process.env.GMAIL_USER,

        to: process.env.GMAIL_USER,

        subject:
          "New Portfolio Contact Message",

        html: `
          <div style="font-family:Arial,sans-serif;padding:20px;">
            
            <h2 style="color:#2563eb;">
              New Portfolio Contact Message
            </h2>

            <hr/>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div
              style="
                background:#f5f5f5;
                padding:15px;
                border-radius:8px;
                color:#111;
              "
            >
              ${message}
            </div>

          </div>
        `,
    });

    console.log(
      "EMAIL SENT SUCCESSFULLY"
    );

    console.log(
      info.response
    );

    res.status(201).json({
      msg:
        "Message Sent Successfully",
      m,
    });

  } catch (error) {

    

    console.log(error);

    res.status(500).json({
      msg:
        error.message,
    });
  }
};

export const getMessages = async (
  req,
  res
) => {
  try {

    const m =
      await Message.find().sort({
        createdAt: -1,
      });

    res.json(m);

  } catch (error) {

    res.status(500).json({
      msg:
        error.message,
    });
  }
};