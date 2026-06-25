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
      msg: "Message Sent Successfully",
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

export const deleteMessage = async (
  req,
  res
) => {
  try {

    await Message.findByIdAndDelete(
      req.params.id
    );

    res.json({
      msg: "Message Deleted",
    });

  } catch (error) {

    res.status(500).json({
      msg: error.message,
    });
  }
};