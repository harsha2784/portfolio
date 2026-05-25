import Certificate from "../models/Certificate.js";

export const addCertificate = async (
  req,
  res
) => {
  try {
    const c = await Certificate.create(
      req.body
    );

    res.status(201).json({
      msg: "Certificate Added",
      c,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getCertificates = async (
  req,
  res
) => {
  try {
    const c = await Certificate.find().sort({
      createdAt: -1,
    });

    res.json(c);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const deleteCertificate = async (
  req,
  res
) => {
  try {
    await Certificate.findByIdAndDelete(
      req.params.id
    );

    res.json({
      msg: "Certificate Deleted",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};