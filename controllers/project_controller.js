const Project = require("../models/project");
const Issue = require("../models/issue");

module.exports.createProject = function (req, res) {
  return res.render("create_project", {
    title: "Issue Tracker | Create Project",
  });
};

module.exports.create = async function (req, res) {
  try {
    let project = await Project.create({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
    });

    return res.redirect("/");
  } catch (error) {
    console.log("Error in Creating Project : ", error);
    return res.redirect("back");
  }
};

module.exports.projectDetails = async function (req, res) {
  try {
    let project = await Project.findById(req.params.id).populate({
      path: "issues",
    });

    console.log("Result project : ", project);

    return res.render("project_details", {
      title: "Issue Tracker | Project Details",
      project: project,
    });
  } catch (error) {
    console.log("Error in project details : ", error);
  }
};

module.exports.delete = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    project.deleteOne();

    await Issue.deleteMany({ project: req.params.id });
    return res.redirect("back");
  } catch (err) {
    console.log("Error in deleting project", err);
    return res.redirect("back");
  }
};
