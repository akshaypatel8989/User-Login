const mongoose = require('mongoose');
//const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAsmin: {
        type: Boolean,
        default: false,
    },
});

//json wab token
//Tokens such as Jwts(Json web tokens),are typically not stord in long with user
//details. Instead they are issues by the server during the authentuc



// Compare the Password

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        }, process.env.JWT_KEY, { expiresIn: "30d" },
        );
    } catch (error) {
        console.error(error);
    }
}

//defind the model or the collection name


const User = new mongoose.model("User", userSchema);
module.exports = User;