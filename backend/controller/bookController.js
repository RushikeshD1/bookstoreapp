const Book = require("../model/bookSchema")

const getBook = async (req, res) => {
    try {
        const book = await Book.find();

        if(!book){
            return res.status(400).json({
                success : false,
                message : "no book found"
            })
        }

        res.status(200).json({
            success : true,
            message : "Book get successfully",
            book
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Book not get"
        })
    }
}

const BookController = {
    getBook
}

module.exports = BookController