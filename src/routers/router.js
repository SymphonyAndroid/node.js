const express = require("express")
const PostModel = require("./../models/post")
const router = express.Router()

// запит на всі публікації
router.get("/posts", async (req, res) => {
    await PostModel
        .find()
        .catch((err) => res.status(500).send(err.message))
        .then(value => res.json(value))
})

// запит на пошук за id
router.get("/post", async (req, res) => {
    let id = req.query.id
    await PostModel
        .findById(id)
        .catch((err) => res.status(500).send(err.message))
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
    await PostModel.findByIdAndDelete(id)
        .catch((err) => res.status(500).send(err.message))

    await post.save()
        .catch((err) => res.status(500).send(err.message))
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
        .catch((err) => res.status(500).send(err.message))
        .then(value => res.json(value))
})

//запит на видалення за id
router.delete("/post/:id", async (req, res) => {
    let id = req.params.id
    await PostModel
        .findByIdAndDelete(id)
        .catch((err) => res.status(500).send(err.message))
        .then(value => res.json(value))
})

//запит на видалення всіх записів у бд
router.delete("/posts", async (req, res) => {
    await PostModel
        .deleteMany()
        .catch((err) => res.status(500).send(err.message))
        .then(value => res.json(value))
})

module.exports.router = router