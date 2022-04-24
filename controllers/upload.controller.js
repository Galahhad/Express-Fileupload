const path = require("path");
module.exports.uploadController = {
    postFile: async (req, res) => {
        try {
            const fileName = req.files.img
            const pathName = `${Math.random() * 10000}${path.extname(fileName.name)}`
            fileName.mv(`${pathName}`, (err) => {
                if(err) {
                    console.log("Error")
                } else {
                    res.json("File download")
                }
            })
        } catch (err) {
            res.json(err)
        }
    }
}