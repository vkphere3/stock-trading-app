const mongoose = require('mongoose');


const StockSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    price_per_unit: {
        type: Number,
        default: 0
    }
});

const Stock = mongoose.model("stock", StockSchema);

function saveStock(stockDetails) {
    return new Promise((resolve, reject) => {
        const stock = new Stock(stockDetails)
        stock.save().then(value => {
            console.log(value);
            resolve(value);
        }, err => {
            reject(err);
        })
    })

}

function fetchAllStocks() {

    return new Promise((resolve, reject) => {
        Stock.find().then(value => {
            console.log(value);
            resolve(value);
        }, err => {
            reject(err);
        })
    })

}
module.exports = { Stock, saveStock, fetchAllStocks };