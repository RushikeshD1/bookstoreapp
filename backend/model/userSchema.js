const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullName : {
        type : String,
        require : true
    },
    emailId : {
        type : String,
        require : true,
        unique : true
    },
    password : {
        type : String,
        require : true
    }
});

const User = mongoose.model("users", userSchema);

module.exports = User