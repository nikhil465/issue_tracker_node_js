const express = require("express");
const router = express.Router();
const projectController = require("../controllers/project_controller");

router.get("/create-project", projectController.createProject);
router.post("/create", projectController.create);
router.get("/project-details/:id", projectController.projectDetails);
router.get("/delete/:id", projectController.delete);

module.exports = router;
