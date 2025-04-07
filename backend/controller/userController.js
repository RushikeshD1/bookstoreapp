const { default: mongoose } = require("mongoose")
const User = require("../model/userSchema")
const bycrpt = require("bcrypt")

const signUp = async (req, res) => {
    try {
        const { fullName, emailId, password } = req.body
        if(!fullName || !emailId || !password){
            return res.status(400).json({
                success : false,
                message : "Please provide all fields"
            })
        }

        const user = await User.findOne({ emailId })

        if(user){
            return res.status(400).json({
                success : false,
                message : "User already exists"
            })
        }

        const hashPassword = await bycrpt.hash(password, 16);
        
        //method 1 to save user 
        // const createUser = new User({
        //     fullName,
        //     email,
        //     password
        // })
        // createUser.save()

        //method 2 to save user 

        const createUser = await User.create({
            fullName,
            emailId,
            password : hashPassword
        })

        res.status(200).json({
            success : true,
            message : "User created successfully",
            user : {
                fullName,
                emailId,
                _id : createUser._id
            }
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message : "User creation failed",            
        })
    }
}

const login = async (req, res) => {
    try {
        const { emailId, password } = req.body;

        if(!emailId || !password){
            return res.status(400).json({
                success : false,
                message : "Please fill all fields"
            })
        }

        const user = await User.findOne({ emailId })

        if(!user){
            return res.status(400).json({
                success : false,
                message : "Invalid email or password"
            })
        }

        const isPasswordMatch = await bycrpt.compare(password, user.password);

        if(!isPasswordMatch){
            return res.status(400).json({
                success : false,
                message : "Invalid email or password"
            })
        }

        const userData = {
            _id : user._id,
            fullName : user.fullName,
            emailId : user.emailId
        }

        res.status(200).json({
            success : true,
            message : "Login Successfull",
            user : userData
        })
        
    } catch (error) {
        res.status(500).json({
           success : false,
           message : "Internal Sever Error",
           err : error 
        })
    }
}

const UserController = {
    signUp,
    login
}

module.exports = UserController