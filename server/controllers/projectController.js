import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  try {
    const p = await Project.create(req.body);

    res.status(201).json({
      msg: "Project Added",
      p,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

export const getProjects = async (req, res) => {
  try {
    const p = await Project.find().sort({ createdAt: -1 });

    res.json(p);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};
export const deleteProject = async (
  req,
  res
) => {
  try {
    await Project.findByIdAndDelete(
      req.params.id
    );

    res.json({
      msg: "Project Deleted",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};