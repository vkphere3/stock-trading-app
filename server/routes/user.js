const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user-controller');

router.post('/login', (req, res, next) => {
    if (req.body) {
        // console.log(req.body);
        login(req, res);
    } else {
        res.send({ Error: "Body is required" })
    }
})


async function saveUser(req, res) {
    try {
        const resp = await UserController.addUser(req.body)
        res.send(resp)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

async function login(req, res) {
    try {
        const resp = await UserController.login(req.body)
        res.send(resp)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

router.post('/register', (req, res, next) => {
    if (req.body) {
        // console.log(req.body);
        saveUser(req, res);
    } else {
        res.send({ Error: "Body is required" })
    }


    // res.send({ status: 'registered' });
})



module.exports = router;