const User = require('../Model/usersModel')
const bcrypt = require("bcrypt")


/* 
req.body - { username: "", password: "examplePassword123"}

*/

//  POST new user with password hashing

const createUser = async (req,res) => {
    try {
//  Generate Salt
        const salt = await bcrypt.genSalt()

//  Generate our hashedPassword
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            salt
        )

//  Set up new data
        const secureUserData = {
            username: req.body.username,
            password: hashedPassword
        }

        const newUser = await User.create(secureUserData)
        res.json(newUser)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const listUsers = async (req,res) => {
    try {
        const userList = await User.find()
        res.json(userList)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {  createUser, listUsers }