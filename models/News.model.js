const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: ""
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: null
    }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;