import Message from "../models/Message.js";

export const addMessage = async (
  req,
  res
) => {
  try {
    const m = await Message.create(
      req.body
    );

    res.status(201).json({
      msg: "Message Sent",
      m,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getMessages = async (
  req,
  res
) => {
  try {
    const m = await Message.find().sort({
      createdAt: -1,
    });

    res.json(m);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};