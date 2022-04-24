const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");

const router = Router();

router.post("/admin/news", newsController.createNews);
router.delete("/admin/news/:id", newsController.deleteNews);
router.patch("/admin/news/:id", newsController.updateNews);
router.get("/user/news/:id", newsController.showNewsById);
router.get("/user/news/category/:id", newsController.showNewsByCategory);
router.get("/user/news", newsController.showAllNews);

module.exports = router;