const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");

const router = Router();

router.post("/admin/category", categoryController.createCategory);
router.delete("/admin/category/:id", categoryController.deleteCategory);
router.patch("/admin/category/:id", categoryController.updateCategory);
router.get("/user/category/:id", categoryController.showCategoryById);
router.get("/user/categories", categoryController.showCategories);

module.exports = router;