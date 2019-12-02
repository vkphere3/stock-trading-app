const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/incedo_db", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(response => {
        console.log("Mongoose connected");

    }, err => {
        console.log(err)
        process.exit(1);
    })