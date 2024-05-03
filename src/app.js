const express = require("express")
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/node").catch(err => console.log(err));
const app = express()
const {router} = require("./routers/router")

let port = 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})