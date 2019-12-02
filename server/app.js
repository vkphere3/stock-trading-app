const express = require('express');
const bodyParser = require("body-parser");
require('./utils/mongoose');
const jwt = require("jsonwebtoken");

const User = require('./models/user');

const userRoutes = require('./routes/user')
const stockRoutes = require('./routes/stocks')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
    "Content-Type": "*/*"
}))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
})

const PORT = process.env.PORT || 3000


const ensureToken = (req, res, next) => {
    const bearerToken = req.headers['authorization'];
    if (bearerToken != undefined) {
        const tokenArray = bearerToken.split(" ");
        const username = tokenArray[0]
        const token = tokenArray[1];
        req.username = username;
        req.token = token;
        next();
    }
    else {
        res.send({
            status: 'TOKEN_NOT_AVAILABLE'
        })
    }
}

const verifyToken = (req, res, next) => {
    jwt.verify(req.token, User.SECRET_KEY, (err, decode) => {
        if (err) {
            return res.send({
                status: 'ERROR'
            })
        }
        if (decode.username === req.username) {
            next();
        }
        else {
            res.send({
                status: "UNAUTHORIZED"
            })
        }

    })
}

// Root route
app.get("/api", (req, res) => {
    res.send({ status: "Connected to the server" });
})

app.use("/api/user", userRoutes);
app.use("/api/stocks", ensureToken, verifyToken, stockRoutes);


app.listen(PORT, () => {
    console.log("Server started and listening at...", PORT)
})