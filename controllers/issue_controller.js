const Issue = require("../models/issue");
const Project = require("../models/project");

module.exports.createIssue = function (req, res) {
  return res.render("create_issue", {
    title: "Issue Tracker | Create Issue",
    projectId: req.params.id,
  });
};

module.exports.create = async function (req, res) {
  try {
    console.log(req.body);
    let project = await Project.findById(req.params.id);
    if (project) {
      console.log("Entered if");
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        labels: req.body.label,
        project: req.params.id,
      });

      project.issues.push(issue);

      if (!(typeof req.body.label === "string")) {
        for (let label of req.body.label) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) project.labels.push(label);
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.label);
        if (!isPresent) project.labels.push(req.body.label);
      }

      project.save();
      return res.redirect(`/projects/project-details/${project._id}`);
    }
  } catch (error) {
    console.log("Error in creating Issue", error);
    return res.redirect("back");
  }
};
