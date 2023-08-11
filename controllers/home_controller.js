const Project = require("../models/project");

module.exports.home = async function (req, res) {
  try {
    let projects = await Project.find({});
    return res.render("home", {
      title: "Home",
      projects: projects,
    });
  } catch (error) {
    console.log("Error in getting projects: ", error);
  }
};
