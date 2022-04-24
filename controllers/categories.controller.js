const Category = require("../models/Category.model");
module.exports.categoryController = {
    createCategory: async (req, res) => {
        try {
           const {title, description} = req.body
            await Category.create({
                title,
                description
            })
            res.json("Категория опубликована")
        } catch (err) {
            res.json({err: "Произошла ошибка при публикации категории"})
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id)

            if (!category) {
                return res.json("Категория не найдена")
            }

            await Category.findByIdAndDelete(req.params.id)
            res.json("Категория удалена")
        } catch (err) {
            res.json({err: "Произошла ошибка при удалении категории"})
        }
    },
    updateCategory: async (req, res) => {
        try {
            const {title, description} = req.body
            const category = await Category.findById(req.params.id)

            if (!category) {
                return res.json("Категория не найдена")
            }

            await Category.findByIdAndUpdate(req.params.id, {
                title,
                description
            })
            res.json("Информация категории обновлена")
        } catch (err) {
            res.json({err: "Произошла ошибка при обновлении информации о категории"})
        }
    },
    showCategoryById: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id)

            if (!category) {
                return res.json("Категория не найдена")
            }

            res.json(category)
        } catch (err) {
            res.json({err: "Произошла ошибка при удалении категории"})
        }
    },
    showCategories: async (req, res) => {
        try {
            const category = await Category.find()

            if (category.length === 0) {
                return res.json("Категорий пока нет...")
            }

            res.json(category)
        } catch (err) {
            res.json({err: "Произошла ошибка при удалении категории"})
        }
    }
}