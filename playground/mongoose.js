const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/node").catch(err => console.log(err));

const post = new PostModel(
    {
        author: "Софія Мінджоса",
        title: "«Якщо переходити в ІТ з держсектору, то це космос». Що роблять юристи в ІТ і які є міфи про професію",
        text: "Редакція DOU вже написала про більшу частину технічних спеціальностей у межах рубрики «Кар’єра в IT». Цього ж разу ми розповідаємо про юристів у IT-компаніях — їхні типові обов’язкі, тестові завдання, зарплати й міфи навколо фаху.\n" +
            "\n" +
            "Щоб розкрити професію повністю, ми поспілкувалися з десятком юристів, які працюють у штаті IT-компаній. Усі цитати, наведені у матеріалі, взяті з їхніх розповідей."
    }
);

db()

async function db() {

    await post.save().then(value => {
        // console.log(value)
    });

    await post.save().then(value => {
        // console.log(value)
    });

    await PostModel.find().then(value => {
        value.forEach(doc => {
            console.log(doc);
        })
    })
}

















