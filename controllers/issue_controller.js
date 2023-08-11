const Issue = require("../models/issue");

module.exports.createIssue = function (req, res) {
  return res.render("create_issue", {
    title: "Issue Tracker | Create Issue",
    projectId: req.params.id,
  });
};

module.exports.create = async function (req, res) {
  try {
    console.log(req.body);
    // let issue = await Issue.create({
    //   title: req.body.title,
    //   description: req.body.description,
    //   author: req.body.author,
    // });
  } catch (error) {}
};
