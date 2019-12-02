const User = require('../models/user')



async function addUser(data) {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            const resp = await User.saveUser(data)
            resolve(resp);
        } catch (err) {
            console.log(err);
            reject(err)
        }
    })



}

function login(data) {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(data);
            const resp = await User.loginUser(data)
            resolve(resp);
        } catch (err) {
            console.log(err);
            reject(err)
        }
    })
}




module.exports = { addUser, login }