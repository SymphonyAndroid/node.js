const express = require("express")
const PostModel = require("./../models/post")
const router = express.Router()

// запит на всі публікації
router.get("/posts", async (req, res) => {
    await PostModel
        .find()
        .catch((err) => console.log(err))
        .then(value => res.json(value))
})

// запит на пошук за id
router.get("/post", async (req, res) => {
    let id = req.query.id
    await PostModel
        .findById(id)
        .catch((err) => console.log(err))
        .then(value => res.json(value))
})

//запит на оновлення/редагування
router.put("/post/:id", async (req, res) => {
    let id = req.params.id
    const post = new PostModel(
        {
            author: req.body.author,
            title: req.body.title,
            text: req.body.text
        }
    )
    await PostModel.findByIdAndUpdate(id, post)
        .catch((err) => console.log(err))
        .then(value => res.json(value))
})

//запит на додавання публікації
router.post("/post", async (req, res) => {
    const post = new PostModel(
        {
            author: req.body.author,
            title: req.body.title,
            text: req.body.text
        }
    )
    await post.save()
        .catch((err) => console.log(err))
        .then(value => res.json(value))
})

//запит на видалення за id
router.delete("/post", async (req, res) => {
    let id = req.query.id
    await PostModel
        .findByIdAndDelete(id)
        .catch((err) => console.log(err))
        .then(value => res.json(value))
})

//запит на видалення всіх записів у бд
router.delete("/post", async (req, res) => {
    await PostModel
        .deleteMany()
        .catch((err) => console.log(err))
        .then(value => res.json(value))
})

module.exports.router = router