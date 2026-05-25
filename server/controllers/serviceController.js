import Service from "../models/Service.js";

export const addService =
  async (req, res) => {

    try {

      const s =
        await Service.create(
          req.body
        );

      res.status(201).json({
        msg: "Service Added",
        s,
      });

    } catch (error) {

      res.status(500).json({
        msg: error.message,
      });
    }
  };

export const getServices =
  async (req, res) => {

    try {

      const s =
        await Service.find().sort({
          createdAt: -1,
        });

      res.json(s);

    } catch (error) {

      res.status(500).json({
        msg: error.message,
      });
    }
  };

export const deleteService =
  async (req, res) => {

    try {

      await Service.findByIdAndDelete(
        req.params.id
      );

      res.json({
        msg: "Service Deleted",
      });

    } catch (error) {

      res.status(500).json({
        msg: error.message,
      });
    }
  };