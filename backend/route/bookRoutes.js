const express = require("express");
const BookController = require("../controller/bookController");

const router = express.Router()

router.get("/", BookController.getBook)

module.exports = router