const Project = require("../models/project");

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

module.exports.projectDetails = function(req, res){
    return res.render('project_details', {
        title: "Issue Tracker | Project Details"
    });
}
