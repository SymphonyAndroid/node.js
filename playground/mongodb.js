const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017/node"

let mongoClient = new MongoClient(url)
dbFunction().then(r => console.log("dbFunction ends work"))

async function dbFunction() {
    try {
        await mongoClient.connect();
        console.log("Connected to mongodb")
        const db = mongoClient.db("users");
        const collection = db.collection("users");
        let user = {
            firstName: "John",
            lastName: "John",
            email: "john@gmail.com",
            password: "123456",
            authToken: "1234567"
        }
        await collection.insertOne(user).then(value => {
            console.log(value)
        })
        await collection.findOne({ email: "john@gmail.com" }).then(value => {
            console.log(value)
        })
        await collection.find({}).toArray().then((value) => {
            console.log(value)
        })
        // await collection.deleteMany({}).then((value) => {
        //     console.log(value)
        // })
    } catch (err) {
        console.log("Error connecting to mongodb");
        console.log(err);
    } finally {
        await mongoClient.close()
        console.log("MongoDB connection closed")
    }
}