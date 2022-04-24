const { Router } = require("express");
const path = require("path");
const { uploadController } = require("../controllers/upload.controller");

const router = Router();

router.post("/", uploadController.postFile);

module.exports = router;