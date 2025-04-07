const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    title : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    category : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book