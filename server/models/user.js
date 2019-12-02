const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const SECRET_KEY = "my_super_secret_key";


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        default: "anonymous"
    },
    email: {
        type: String
    },
    wallet_balance: {
        type: Number,
        default: 50000
    }
});

const User = mongoose.model("user", UserSchema);


const doesUserExist = async (user) => {
    try {
        const userArray = await fetchAllUsers();
        var duplicateUsers = userArray.filter((userDB) => userDB.username === user.username)
        console.log(duplicateUsers)
        if (duplicateUsers.length === 0) {
            return false;
        }
        else {
            return true;
        }
    } catch (err) {
        console.log(err);
        reject(err)
    }
}

function saveUser(userDetails) {

    return new Promise(async (resolve, reject) => {
        const user = new User(userDetails)
        let doesExist = await doesUserExist(user);
        if (!doesExist) {
            user.save().then(value => {
                // console.log(value);
                resolve(value);
            }, err => {
                reject(err);
            })
        }
        else {
            resolve({
                status: "USER_EXISTS"
            })
        }


    })

}


function loginUser(data) {
    // console.log(data)
    return new Promise((resolve, reject) => {
        User.find({ username: data.username }).then(value => {
            console.log(value)
            // console.log(data.username === value[0].username && data.password === value[0].password)
            if (data.username === value[0].username && data.password === value[0].password) {
                const token = jwt.sign(data, SECRET_KEY)
                resolve({
                    status: 'LOGGED_IN',
                    token: token
                })
            }
            else {
                resolve({
                    status: 'NOT_LOGGED_IN'
                })
            }
        }, err => {
            reject({ "Error": err })
        })
    })

}

function fetchAllUsers() {

    return new Promise((resolve, reject) => {
        User.find().then(value => {
            // console.log(value);
            resolve(value);
        }, err => {
            reject(err);
        })
    })

}

module.exports = { User, saveUser, loginUser, SECRET_KEY };