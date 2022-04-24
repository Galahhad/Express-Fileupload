const News = require("../models/News.model");
module.exports.newsController = {
    createNews: async (req, res) => {
        try {
            const {title, text, category} = req.body
            await News.create({
                title,
                text,
                category
            })
            res.json("Новость опубликована")
        } catch (err) {
            res.json({err: "Произошла ошибка при публикации новости"})
        }
    },
    deleteNews: async (req, res) => {
        try {
            const news = await News.findById(req.params.id)

            if (!news) {
                return res.json("Новость не найдена")
            }

            await News.findByIdAndDelete(req.params.id)
            res.json("Новость удалена")
        } catch (err) {
            res.json({err: "Произощла ошибка при удалении новости"})
        }
    },
    updateNews: async (req, res) => {
        try {
            const {title, text, category} = req.body
            const news = await News.findById(req.params.id)

            if (!news) {
                return res.json("Новость не найдена")
            }

            await News.findByIdAndUpdate(req.params.id, {
                title,
                text,
                category
            })
            res.json("Информация новости обновлена")
        } catch (err) {
            res.json({err: "Произошла ошибка при обновлении информации о новости"})
        }
    },
    showNewsById: async (req, res) => {
        try {
            const news = await News.findById(req.params.id).populate("category", "title")

            if (!news) {
                return res.json("Новость не найдена")
            }

            res.json(news)
        } catch (err) {
            res.json(err)
        }
    },
    showNewsByCategory: async (req, res) => {
        try {
            const news = await News.find({category: req.params.id}).populate("category", "title")

            if (news.length === 0) {
                return res.json("В этой категории пока нет новостей...")
            }

            res.json(news)
        } catch (err) {
            res.json({err: "Произошла ошибка при получении информации о новостях"})
        }
    },
    showAllNews: async (req, res) => {
        try {
            const news = await News.find().populate("category", "title")

            if (news.length === 0) {
                return res.json("Новостей пока нет...")
            }

            res.json(news)
        } catch (err) {
            res.json({err: "Произошла ошибка при получении информации о новостях"})
        }
    }
}