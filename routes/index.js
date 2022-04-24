const { Router } = require("express");

const router = Router();

router.use(require("./news.route"));
router.use(require("./categories.route"));
router.use("/upload", require("./upload.route"));

module.exports = router;