import Home from "../models/Home.js";

export const saveHome =
  async (req, res) => {

    try {

      const existing =
        await Home.findOne();

      if (existing) {

        existing.name =
          req.body.name;

        existing.role =
          req.body.role;

        existing.desc =
          req.body.desc;

        existing.image =
          req.body.image;

        await existing.save();

        return res.json({
          msg: "Home Updated",
        });
      }

      await Home.create(req.body);

      res.json({
        msg: "Home Created",
      });

    } catch (error) {

      res.status(500).json({
        msg: error.message,
      });
    }
  };

export const getHome =
  async (req, res) => {

    try {

      const h =
        await Home.findOne();

      res.json(h);

    } catch (error) {

      res.status(500).json({
        msg: error.message,
      });
    }
  };