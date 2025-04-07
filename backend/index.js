const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./route/bookRoutes");
const userRoute = require("./route/userRoute");

const cors = require("cors")

const app = express();
dotenv.config();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended : true}));

const PORT = process.env.PORT || 10000;

app.use("/v1/api/book", bookRoute);
app.use("/v1/api/user", userRoute);

mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Database not connected successfully", err))


app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));