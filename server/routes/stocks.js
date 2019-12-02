const express = require('express');

const router = express.Router();
const StockController = require('../controllers/stock-controller')


//Helper methods
async function saveStock(req, res) {
    try {
        const resp = await StockController.addStock(req.body)
        res.send(resp)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

async function fetchAllStocks(req, res) {
    try {
        const resp = await StockController.fetchAllStocks()
        res.send(resp)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

async function buyStocks(req, res) {
    try {
        const resp = await StockController.buyStock(req.username,req.body)
        res.send(resp)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

router.get('/', (req, res, next) => {
    fetchAllStocks(req, res)
})

router.post('/', (req, res, next) => {
    if (req.body) {
        // console.log(req.body);
        saveStock(req, res);
    } else {
        res.send({ Error: "Body is required" })
    }
})

router.post('/buy', (req, res, next) => {

    if (req.body) {
        // console.log(req.body);
        buyStocks(req, res);
    } else {
        res.send({ Error: "Body is required" })
    }
})

router.post('/sell', (req, res, next) => {
    res.send({ status: 'SOLD' });
})


router.get('/portfolio', (req, res, next) => {
    res.send({ status: 'Portfolio' });
})


module.exports = router;